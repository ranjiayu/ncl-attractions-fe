/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:30:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-24 16:49:17
 * @Description: The place detail page
 */

import React, { useState } from "react";
import { FaMapMarkerAlt, FaWalking, FaAngleDown } from "react-icons/fa";

import "../../styles/Detail/InfoDetail.css";

function InfoDetail(props) {
    let placeType = props.placeType;
    let placeName = props.placeName;
    let distance = props.distance;
    let walkTime = props.walkTime;
    let openState = props.openState;
    let openingHours = props.openingHours;
    const [showOpeningHours, setShowOpeningHours] = useState(false);

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
                    <FaMapMarkerAlt style={{fontSize: "16px", color: "#919191"}}/>
                </div>
                <p className="distance">
                    {distance} miles
                </p>
            </div>
            <div className="walkTimePic">
                <div className="walkPic">
                    <FaWalking style={{fontSize: "16px", color: "#919191"}}/>
                </div>
                <p className="walkTime">
                    {walkTime} min
                </p>
            </div>
            <div className="openTime" onClick={handleOpenDetail}>
                <p className="openState">
                    {openState ? "Open now" : "Closed"}
                </p>
                <div className="openDetail">
                    <FaAngleDown style={{fontSize: "16px", color: "#919191"}} />
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