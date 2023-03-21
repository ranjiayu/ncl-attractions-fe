/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-16 12:51:46
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-21 10:41:41
 * @Description: Dropdown box, which must be used with <SearchBox />
 */
import DropdownItem from "./DropdownItem";
import { useEffect, useState } from "react";
import api from "../../api";
import "../../styles/Home/Dropdown.css";

function Dropdown(props) {

  const isShow = props.isShow;
  const placeName = props.placeName;
  const [placeList, setPlaceList] = useState([]);
  // 1mile = 1610 meters, by default
  const radius = 1610;
  let latitude = 0;
  let longitude = 0;
  if (props.position.coords) {
    console.log(props.position.coords);
    latitude = props.position.coords.latitude;
    longitude = props.position.coords.longitude;
  }

  /**
   * Format the result
   * @param {Array} predictionsList 
   */
  function processPredictionsData(predictionsList) {
    let result = [];
    for (let i = 0; i < predictionsList.length; i ++) {
      let tempPlace = {
        'placeID': predictionsList[i].place_id,
        'reference': predictionsList[i].reference,
        'name': predictionsList[i].structured_formatting.main_text,
        'type': predictionsList[i].types[0]
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
      let predictions = resp.predictions;
      if (predictions.length > 0) {
        processPredictionsData(predictions);
      }
    });
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
        {placeList.map((item) => {
          return <DropdownItem 
            key={item.placeID}
            name={item.name} 
            type={item.type}
            distance="1.1" 
          />
        })}
      </div>
    );
  }

  return <div></div>;
}

export default Dropdown;