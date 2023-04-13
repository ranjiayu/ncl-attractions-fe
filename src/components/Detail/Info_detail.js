import React from "react";
import locPic from "../../images/location.png";
import walkPic from "../../images/walk.png";
import openDetail from "../../images/openDetail.png";
import "../../styles/Detail/Info_detail.css";

function Info_detail(props) {
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
                    {distance}
                </p>
            </div>
            <div className="walkTimePic">
                <div className="walkPic">
                    <img src={walkPic} />
                </div>
                <p className="walkTime">
                    {walkTime}
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
export default Info_detail;