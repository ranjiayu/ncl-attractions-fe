/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-20 09:54:17
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-29 14:37:29
 * @Description: Detail page picture slider
 */
import React, { useState } from "react";
import config from '../../config';
import leftButton from "../../images/arrow-left.png";
import rightButton from "../../images/arrow-right.png";

import "../../styles/Detail/InfoPic.css";
//view pictures

const InfoPic = (props) => {
  let images = [];
  // get all photos' references
  const photos = props.photos;
  if (photos && photos.length) {
    for (let i = 0; i < photos.length; i++) {
      let picUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photos[i].photo_reference}&key=${config['MAP_API_KEY']}`;
      images.push(picUrl);
    }
  }
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  }
  const handleNext = () => {
    setIndex((index + 1) % images.length);
  }
  return (
    <div className="carousel">
      <div className="pics-container">
        <img src={images[index]} alt="" className="pics" />
        <img src={leftButton} className="leftBtn" onClick={handlePrev} />
        <img src={rightButton} className="rightBtn" onClick={handleNext} />
      </div>
    </div>
  );
}

export default InfoPic;