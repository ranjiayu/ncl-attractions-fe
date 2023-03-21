/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:28:27
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-21 14:34:18
 * @Description: Places list, which is used in Home page 
 * and result page.
 */

import PlaceItem from "./PlaceItem";
import Error from "../Common/Error";
import { useEffect, useState } from "react";
import { BiLoader } from 'react-icons/bi';
import api from "../../api";
import "../../styles/Result/List.css";

function List(props) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [placesData, setPlacesData] = useState([]);
  const position = props.position;

  /**
   * Format the result
   * @param {Array} result 
   */
  function processResult(result) {
    let data = [];
    for (let i = 0; i < result.length; i ++) {
      let tmpObj = {
        name: result[i].name,
        placeID: result[i].place_id,
        rate: result[i].rating,
        reference: result[i].photos[0].photo_reference,
        type: result[i].types.join(','),
      };
      data.push(tmpObj);
    }
    console.log(data);
    setPlacesData(data);
    setLoading(false);
  }

  // 1 mile = 1610 meters
  /**
   * Send http request to get nearby places
   * @param {Object} position 
   */
  function getPlacesByLocation(position) {
    if (position && position.coords) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude
      let params = `?latitude=${latitude}&longitude=${longitude}`;
      fetch(api.host + api.getApi['getNearbyAttractions'] + params, {
        method: "GET",
        mode: "cors",
      })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log("Got nearby places data: ");
        console.log(resp);
        if (resp.results && resp.results.length > 0) {
          console.log("processing data");
          processResult(resp.results);
        }
      })
      .catch((err) => {
        // deal with the error, like network error.
        setError(true);
        setLoading(false);
        console.log(err);
      })
    }

  }

  useEffect(() => {
    getPlacesByLocation(position);
  }, [position]);

  // Loading
  if (loading) {
    return (
      <div className="resultList center-container" style={{padding: '0 20px', 'flexDirection': 'column', 'color': '#8B8B8B'}}>
        <div style={{flex: '1'}}>
          <BiLoader style={{'fontSize': '40px'}}/>
        </div>
        <p style={{'fontSize': '20px'}}>Loading....</p>
      </div>
    );
  }

  if (error && !loading) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="resultList">
      <ul>
        {placesData.map((item) => {
          return <PlaceItem key={item.placeID} item={item}></PlaceItem>
        })}
      </ul>
    </div>
  );


}

export default List;