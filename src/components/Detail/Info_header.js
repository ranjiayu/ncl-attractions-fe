import React, { useState } from "react";
import { Link } from 'react-router-dom';
import backButton from "../../images/back.png";
import shareButton from "../../images/share.png";
import emailIcon from "../../images/email.png";
import linkIcon from "../../images/copyLink.png";
import "../../styles/Detail/Info_header.css";

function Info_header(props) {


    let placeName = props.placeName;
    //share function
    const [showShareBox, setShowShareBox] = useState(false);
    function handleShareClick() {
        setShowShareBox(true);
    }
    function handleCloseClick() {
        setShowShareBox(false);
    }
    return (
        <div>
            <div className="info_header">
            
            <div className="backBtn">
                <Link to="../Result/List.js">
                    <img src={backButton} />
                </Link>
                {/* <img src={backButton} onClick={handleBack} /> */}
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
export default Info_header;