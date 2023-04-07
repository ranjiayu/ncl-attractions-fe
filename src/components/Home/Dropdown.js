/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-16 12:51:46
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-07 15:15:29
 * @Description: Dropdown box, which must be used with <SearchBox />
 */
import DropdownItem from "./DropdownItem";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../api";
import "../../styles/Home/Dropdown.css";
import googleLogo from "../../images/google.png";

function Dropdown(props) {
  const navigate = useNavigate();
  const isShow = props.isShow;
  const placeName = props.placeName;
  const [placeList, setPlaceList] = useState([]);
  // 1mile = 1610 meters, by default
  const radius = 1610;
  let latitude = 0;
  let longitude = 0;
  if (props.position) {
    console.log(props.position);
    latitude = props.position.lat;
    longitude = props.position.lng;
  }

  /**
   * Format the result
   * @param {Array} results 
   */
  function processPredictionsData(results) {
    let result = [];
    for (let i = 0; i < results.length; i ++) {
      let tempPlace = {
        'placeID': results[i].place_id,
        'reference': results[i].reference,
        'name': results[i].description,
        'type': results[i].types[0],
        'distance': results[i].distance_meters,
      };
      result.push(tempPlace);
    }
    setPlaceList(result);
  }

  /**
   * Send http request to get auto complete data.
   */
  function getAutoCompleteData() {
    console.log("Getting auto complete data...");
    let params = `?input=${placeName}&radius=${radius}&latitude=${latitude}&longitude=${longitude}`;
    fetch(api.host + api.getApi['getAutoComplete'] + params, {
      method: "GET",
      mode: "cors",
    })
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      console.log("Got auto complete data: ");
      console.log(resp);
      if (resp && resp.length) {
        processPredictionsData(resp);
      }
    });
  }

  function handleClickPlace(placeID, name) {
    console.log("To result page:" + placeID);
    navigate("/result/" + placeID + "?name=" + name);
  }

  // if the placeName changes, execute this function.
  useEffect(() => {
    if (latitude && longitude) {
      getAutoCompleteData();
    }

  }, [placeName]);


  if (isShow && placeName) {
    return (
      <div className="dropdown-box">
        <div className="google-map-tip">
        <img src={googleLogo} />
        <span>provides the following results</span>
        </div>
        {placeList.map((item) => {
          return <DropdownItem 
            key={item.placeID}
            name={item.name} 
            type={item.type}
            distance={item.distance} 
            onClick={() => {return handleClickPlace(item.placeID, item.name)}}
          />
        })}
      </div>
    );
  }

  return <div></div>;
}

export default Dropdown;