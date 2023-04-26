/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-20 09:54:17
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 09:34:59
 * @Description: The index page of place detail
 */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Components
import AppHeader from "../Common/Header";
import ReviewList from "./ReviewList";
import InfoHeader from "./InfoHeader"
// import Route from "./Route"
import InfoPic from "./InfoPic";
import InfoDetail from "./InfoDetail";
import api from "../../api";
// import utils
import calDistance from '../../utils/calDistance';
import convertType from '../../utils/convertType';

// CSS
import "../../styles/Detail/Index.css";
import "../../styles/Detail/InfoPic.css";

function DetailIndex() {
  // state
  const [placeDetail, setPlaceDetail] = useState({
    name: "loading...",
    distance: 0,
    walkTime: 0,
    openState: ""
  });
  const [reviews, setReviews] = useState([]);
  // get placeID from url
  const urlParams = useParams();

  useEffect(() => {

    // Get current location
    window.navigator.geolocation.getCurrentPosition((position) => {
      let p = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      // Make a fetch request to get the details for the new place based on the updated placeID state
      // after querying user's position
      fetch(api.host + `${api.getApi['getDetails']}?placeID=${urlParams.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        // calculate the distance and walktime
        let lat = data.geometry.location.lat;
        let lng = data.geometry.location.lng;
        let distance = calDistance(lat, lng, p.lat, p.lng).toFixed(2);
        let type = convertType(data.types.join(","));
        let walkTime = parseInt(distance * 18, 10);
        let isOpen = data.opening_hours && data.opening_hours.open_now;
        let openingHours = data.opening_hours;

        // Update the placeDetail state with the new details
        setPlaceDetail({
          name: data.name,
          type: type,
          distance: distance,
          walkTime: walkTime,
          openState: isOpen,
          photos: data.photos || [],
          openingHours: openingHours,
        });
      })
      .catch(error => {
        console.error('Error fetching place details:', error);
      });
    });

    // make the fetch request to get the reviews for the new place
    fetch(api.host + api.getApi['getComments'] + urlParams.id)
      .then(response => response.json())
      .then(data => {
        console.log(`Get comments of place_id = ${urlParams.id}:`);
        console.log(data);
        if (data.httpStatusCode !== "NOT_FOUND" && data.length) {
          setReviews(data);
        }
        // update the state with the new reviews
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div>
      <AppHeader />
      <div className="backgroundAll">
        <InfoHeader placeName={placeDetail.name} />
        <div className="background">
          <div className="content">
            <InfoPic photos={placeDetail.photos} />
            <InfoDetail 
              placeType={placeDetail.type}
              placeName={placeDetail.name}
              distance={placeDetail.distance}
              walkTime={placeDetail.walkTime}
              openState={placeDetail.openState} 
              openingHours={placeDetail.openingHours}
            />
            <ReviewList review={reviews} placeDetail={placeDetail} />
          </div>
        </div>
      </div>
    </div>

  );

}


export default DetailIndex;