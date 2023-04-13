/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:30:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-08 14:51:20
 * @Description: The place detail page
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Components
import AppHeader from "../Common/Header";
import ReviewList from "./ReviewList";
import Info_header from "./Info_header"
//import Route from "./Route"
import Carousel from "./Info_pic";
import Info_detail from "./Info_detail";
// CSS
import "../../styles/Detail/Index.css";
import "../../styles/Detail/Info_pic.css";

function DetailIndex() {


  // state
  const [placeID, setPlaceID] = useState(0);
  const [review, setReview] = useState([]);
  const [placeDetail, setPlaceDetail] = useState({ name: "loading...", distance: 0, walkTime: "0 min", openState: "" }); const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Make a fetch request to get the details for the new place based on the updated placeID state
    fetch(`/api/place/${placeID}`)
      .then(response => response.json())
      .then(data => {
        // Update the placeDetail state with the new details
        setPlaceDetail({
          name: data.name,
          type: data.type,
          distance: data.distance,
          walkTime: data.walkTime,
          openState: data.openState
        });
      })
      .catch(error => {
        console.error('Error fetching place details:', error);
      });


    // make the fetch request to get the reviews for the new place
    fetch(`/api/place/${placeID}/reviews`)
      .then(response => response.json())
      .then(data => {
        // update the state with the new reviews
        setReviews(data.review);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, [placeID]);

  return (
    <div>
      <AppHeader />
      <div className="backgroundAll">
        <Info_header placeName={placeDetail.name} />
        <div className="background">
          <div className="content">
            <Carousel />
            <Info_detail placeType={placeDetail.type} placeName={placeDetail.name} distance={`${placeDetail.distance} miles`} walkTime={placeDetail.walkTime} openState={placeDetail.openState} />
            <ReviewList review={review} />
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <AppHeader />
    //   <div className="backgroundAll">
    //     <Info_header placeName={"placeName"}/>
    //     <div className="background">
    //       <div className="content">
    //         <Carousel />
    //         <Info_detail placeType={"placeType"} placeName={"placeName"} distance={"4 miles"} walkTime={"15min"} openState={"open now"}/>
    //         <ReviewList username={123} rate={"5"} date={"2022-1-1"} content={"hahaa"} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
  // useEffect 第二参数为空数组，代表只执行一次，在页面加载完成的时候
  useEffect(function () {

    // 模拟发起网络请求
    // setTimeout(function() {
    //   setPlaceDetail({
    //     name: "123",
    //     distance: 1
    //   });

    //   setReviews([]);
    // }, 3000);

  }, []);
  // return (
  //   <div>
  //     <AppHeader />
  //     <Info_header />
  //     <Info_pic />
  //     <Info_detail />

  //     <p className="test">{placeDetail.name}</p>
  //     <p className="test">{placeDetail.distance} mile</p>
  //     <img src={googleImg} />

  //     <ReviewList username={123} rate={"5"} date={"2022-1-1"} content={"hahaa"} />


  //   </div>
  // );


}


export default DetailIndex;