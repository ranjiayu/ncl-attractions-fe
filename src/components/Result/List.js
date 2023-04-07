/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:28:27
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-07 15:03:07
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
  const isShow = props.isShow;
  const onloadedFunc = props.onLoaded;
  const placeType = props.placeType || [];

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
        reference: result[i].photos && result[i].photos.length && result[i].photos[0].photo_reference,
        type: result[i].types.join(','),
      };
      data.push(tmpObj);
    }
    setPlacesData(data);
    setLoading(false);
  }

  // 1 mile = 1610 meters
  /**
   * Send http request to get nearby places
   * @param {Object} position 
   * @param {Array} placeType optional. ['library', 'park', 'museum', 'point_of_interest']
   */
  function getPlacesByLocation(position, placeType) {
    if (position && position.lat) {
      let latitude = position.lat;
      let longitude = position.lng;
      let params = `?latitude=${latitude}&longitude=${longitude}`;
      if (placeType && placeType.length) {
        placeType = placeType.join(",");
        params += ("&placeType=" + placeType);
      }
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
        if (resp && resp.length > 0) {
          console.log("processing data");
          // format the data from the server
          processResult(resp);

          // notify the father component that the data has received
          // Then the father component will send the data to "Map" components
          if (onloadedFunc) {
            onloadedFunc(resp);
          }
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

  // placeType should be stringify, or the page will re-render many times.
  useEffect(() => {
    getPlacesByLocation(position, placeType);
  }, [position, JSON.stringify(placeType)]);

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
    <div className="resultList" style={{display: isShow ? 'block' : 'none'}}>
      <ul>
        {placesData.map((item) => {
          return <PlaceItem key={item.placeID} item={item}></PlaceItem>
        })}
      </ul>
    </div>
  );


}

export default List;