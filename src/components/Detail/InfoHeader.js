/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-20 09:54:17
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 09:36:28
 * @Description: Detail page header
 */
import React, { useState } from "react";
import { FaTwitter, FaLink, FaShareAlt, FaChevronLeft } from "react-icons/fa";
import "../../styles/Detail/InfoHeader.css";

function InfoHeader(props) {
    let placeName = props.placeName;
    //share function
    const [showShareBox, setShowShareBox] = useState(false);
    // toggle share box
    function handleShareClick() {
        if (showShareBox === true) {
            setShowShareBox(false);
        } else {
            setShowShareBox(true);
        }
    }
    function handleCloseClick() {
        setShowShareBox(false);
    }
    // back to previous page
    function handleBack() {
        window.history.back();
    }
    // copy link to paste board
    function copyLink() {
        let url = window.location.href;
        navigator.clipboard.writeText(url);
        alert("Link copied!");
        setShowShareBox(false);
    }
    // share by email
    function shareToTwitter() {
        let url = "https://twitter.com/intent/tweet?text=";
        let text = `This is a interesting place called ${placeName}, here is link: ${window.location.href}`;
        url += text;
        window.open(url);
    }
    return (
        <div>
            <div className="info_header">
            
            <div className="backBtn" onClick={handleBack}>
                <FaChevronLeft style={{fontSize: "22px", color: "#919191"}} />
            </div>
            <div className="placeName">
                {placeName}
            </div>
            <div className="shareBtn" onClick={handleShareClick}>
                <FaShareAlt style={{fontSize: "22px", color: "#919191"}} />
            </div>
            </div>
            {showShareBox && (
                <div className="shareBox">
                    <div onClick={shareToTwitter}>
                        <FaTwitter className="emailIcon" />
                        <span className="iconSpan">Twitter</span>
                    </div>
                    <div onClick={copyLink}>
                        <FaLink className="linkIcon" />
                        <span className="iconSpan">Copy link</span>
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