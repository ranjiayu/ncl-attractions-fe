/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-16 12:51:46
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-16 16:40:37
 * @Description: Description
 */
import DropdownItem from "./DropdownItem";
import { useEffect, useState } from "react";
import api from "../../api";
import "../../styles/Home/Dropdown.css";

function Dropdown(props) {

  const isShow = props.isShow;
  const placeName = props.placeName;
  const [placeList, setPlaceList] = useState([]);
  // 1500 meters default
  const radius = 1500;
  const latitude = props.position.coords.latitude;
  const longtitude = props.position.coords.longtitude;

  function getAutoCompleteData() {
    let params = `?input=${placeName}&radius=${radius}&latitude=${latitude}&longtitude=${longtitude}`;
    fetch(api.host + api.getApi['getAutoComplete'], {
      method: "GET",
      mode: "cors",
    })
    .then((resp) => {
      console.log(resp);
    })
  }

  // if the placeName changes, execute this function.
  useEffect(() => {
    getAutoCompleteData();

  }, [placeName]);


  if (isShow && placeName) {
    return (
      <div className="dropdown-box">
          <DropdownItem name="Discory museum" type="museum" distance="1.1" />
          <DropdownItem name="Discory museum1" type="museum" distance="1.2" />
          <DropdownItem name="Discory museum2" type="museum" distance="1.3" />
      </div>
    );
  }

  return <div></div>;
}

export default Dropdown;