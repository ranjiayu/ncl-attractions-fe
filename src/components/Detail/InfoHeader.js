/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-20 09:54:17
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-24 10:36:53
 * @Description: Description
 */
import React, { useState } from "react";
import backButton from "../../images/back.png";
import shareButton from "../../images/share.png";
import emailIcon from "../../images/email.png";
import linkIcon from "../../images/copyLink.png";
import "../../styles/Detail/InfoHeader.css";

function InfoHeader(props) {
    let placeName = props.placeName;
    //share function
    const [showShareBox, setShowShareBox] = useState(false);
    function handleShareClick() {
        setShowShareBox(true);
    }
    function handleCloseClick() {
        setShowShareBox(false);
    }
    function handleBack() {
        window.history.back();
    }
    return (
        <div>
            <div className="info_header">
            
            <div className="backBtn" onClick={handleBack}>
                <img src={backButton} />
            </div>
            <div className="placeName">
                {placeName}
            </div>
            <div className="shareBtn" onClick={handleShareClick}>
                <img src={shareButton} />
            </div>
            </div>
            {showShareBox && (
                <div className="shareBox">
                    <div>
                        <img src={emailIcon} alt="share" className="emailIcon" />
                        <span>Email</span>
                    </div>
                    <div>
                        <img src={linkIcon} alt="share" className="linkIcon" />
                        <span>Copy link</span>
                    </div>
                    <div className="closeBtn" onClick={handleCloseClick}>
                        Close
                    </div>
                </div>
            )}
        </div>
    )
}
export default InfoHeader;