/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:29:10
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-13 22:51:33
 * @Description: Result index page
 */

import SearchBox from '../Home/SearchBox';
import List from './List';
import Map from './Map';
import "../../styles/Result/Index.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkedAlt, FaFilter } from 'react-icons/fa';

function ResultIndex() {
  // const [center, setCenter] = useState(null);
  const { placeID } = useParams();

  // useEffect(() => {
  //   setDefaultLocation();
  // }, []);

  // function setDefaultLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setCenter({lat: position.coords.latitude , lng: position.coords.longitude});
  //     });
  //   }
  // }

  function handleShowMap() {
    console.log("show Map component.");
  }


  return (
    <div className="resultIndex">
      <SearchBox name={placeID}/>

      {/* <Map center={center}  /> */}
      <div className="placeContainer">

        <div className="functionContainer">
          <div className="badge" onClick={handleShowMap}>
            <FaMapMarkedAlt />
            <span>Map</span>
          </div>
          <div className="badge">
            <FaFilter />
            <span>Filter</span>
          </div>
        </div>

        <List />
      </div>
    </div>
  );
}

export default ResultIndex;