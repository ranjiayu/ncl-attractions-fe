/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:30:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 19:58:06
 * @Description: Place detail component
 */

import React, { useState } from "react";
import { FaMapMarkerAlt, FaWalking, FaAngleDown,
  FaAccessibleIcon, FaMoneyBillAlt } from "react-icons/fa";

import "../../styles/Detail/InfoDetail.css";

function InfoDetail(props) {
  // props from Index  component
  let placeType = props.placeType;
  let placeName = props.placeName;
  let distance = props.distance;
  let walkTime = props.walkTime;
  let openState = props.openState;
  let openingHours = props.openingHours;
  let extraInfo = props.extraInfo;
  const [showOpeningHours, setShowOpeningHours] = useState(false);

  // toggle opening times
  function handleOpenDetail() {
    if (showOpeningHours === true) {
      setShowOpeningHours(false);
    } else {
      setShowOpeningHours(true);
    }
  }

  return (
    <div className="info_detail">
      <div className="placeType">
        {placeType}
      </div>
      <div className="detailName">
        {placeName}
      </div>
      <div className="distancePic">
        <div className="locPic">
          <FaMapMarkerAlt className="iconStyle" />
        </div>
        <p className="distance">
          {distance} miles
        </p>
      </div>
      <div className="walkTimePic">
        <div className="walkPic">
          <FaWalking className="iconStyle" />
        </div>
        <p className="walkTime">
          {walkTime} min
        </p>
      </div>

      <div>
        <p><FaAccessibleIcon className="iconStyle" /> {extraInfo.accessibility === true ? "Yes" : extraInfo.accessibility === false ? "No" : "Unknown"}</p>
        <p><FaMoneyBillAlt className="iconStyle" /> £{extraInfo.admissionFee ? extraInfo.admissionFee : "?"}</p>
      </div>

      <div className="openTime" onClick={handleOpenDetail}>
        <p className="openState">
          {openState ? "Open now" : "Closed"}
        </p>
        <div className="openDetail">
          <FaAngleDown className="iconStyle" />
        </div>
      </div>
      <div className="openingHours">
        {
          openingHours && openingHours.weekday_text && showOpeningHours &&
          openingHours.weekday_text.map((item, index) =>
            <div key={index}>
              {item}
            </div>
          )
        }
      </div>
    </div>
  );
}
export default InfoDetail;