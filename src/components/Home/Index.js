/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:19:47
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-05-07 23:18:09
 * @Description: Home page
 */

import React, { useEffect } from 'react';
import { useState } from 'react';
// Components
import AppHeader from "../Common/Header";
import SearchBox from './SearchBox';
import List from '../Result/List';
import Dropdown from './Dropdown';
// CSS
import "../../styles/Home/Index.css";

function HomeIndex() {

  const [placeName, setPlaceName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [position, setPosition] = useState({});
  let timer;

  // Get the current position by nabigator when dom loaded.
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      let p = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      setPosition(p);
    });
  }, []);

  // when user types something, show selections!
  function handlePlaceNameChange(e) {
    // send autocomplete api after stopping typing for 1.5 seconds
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("Set place name: " + e.target.value);
      if (!e.target.value) {
        setShowDropdown(false);
      } else {
        setPlaceName(e.target.value);
        setShowDropdown(true);
      }

    }, 1500);
  }

  return (
    <div className="Home">

        <AppHeader />

        <div className="home-search-box">
          <div style={{width: "80%", position: "relative", 'zIndex': 9999}}>
            <SearchBox onChange={handlePlaceNameChange}>
              <Dropdown 
                isShow={showDropdown}
                placeName={placeName}
                position={position}
              />
            </SearchBox>

          </div>
        </div>

        <div className="defaultNearby">
          <p className="defaultNearbyTitle">Attractions nearby</p>
          <List 
            position={position}
            isShow={true}
          />
        </div>

    </div>
  );
}

export default HomeIndex;
