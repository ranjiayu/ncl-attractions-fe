/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:29:10
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-16 13:11:49
 * @Description: Result index page
 */

import SearchBox from '../Home/SearchBox';
import List from './List';
import Map from './Map';
import Filter from './Filter';
import Button from '../Common/Button';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkedAlt, FaFilter } from 'react-icons/fa';
import "../../styles/Result/Index.css";

function ResultIndex() {
  // const [center, setCenter] = useState(null);
  const { placeID } = useParams();
  const [showFilter, setShowFilter] = useState(false);

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

  function handleShowFilter() {
    console.log("show filter");
    setShowFilter(true);
  }

  function closeFilter() {
    setShowFilter(false);
  }


  return (
    <div className="resultIndex">
      <div style={{padding: '5px', background: '#d7e9fb'}}>
        <SearchBox name={placeID}/>
      </div>

      {/* <Map center={center}  /> */}
      <div className="placeContainer">

        <div className="functionContainer">

          <Button type="primary">
            <FaMapMarkedAlt />
            <span>Map</span>
          </Button>

          <Button type="primary" onClick={handleShowFilter}>
            <FaFilter />
            <span>Filter</span>
          </Button>

        </div>

        <List />

        <Filter isShow={showFilter} callback={closeFilter} />

      </div>

      


    </div>
  );
}

export default ResultIndex;