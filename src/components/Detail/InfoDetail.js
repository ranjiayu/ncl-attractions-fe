/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:30:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-24 10:36:23
 * @Description: The place detail page
 */

import React from "react";
import locPic from "../../images/location.png";
import walkPic from "../../images/walk.png";
import openDetail from "../../images/openDetail.png";
import "../../styles/Detail/InfoDetail.css";

function InfoDetail(props) {
    let placeType = props.placeType;
    let placeName = props.placeName;
    let distance = props.distance;
    let walkTime = props.walkTime;
    let openState = props.openState;

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
                    <img src={locPic} />
                </div>
                <p className="distance">
                    {distance} miles
                </p>
            </div>
            <div className="walkTimePic">
                <div className="walkPic">
                    <img src={walkPic} />
                </div>
                <p className="walkTime">
                    {walkTime} min
                </p>
            </div>
            <div className="openTime">
                <p className="openState">
                    {openState}
                </p>
                <div className="openDetail">
                    <img src={openDetail} />
                </div>
            </div>
        </div>
    )
}
export default InfoDetail;