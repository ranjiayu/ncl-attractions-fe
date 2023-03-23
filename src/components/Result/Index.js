/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:29:10
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-23 12:41:26
 * @Description: Result index page
 */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// components
import SearchBox from '../Home/SearchBox';
import List from './List';
import Map from './Map';
import Filter from './Filter';
import Button from '../Common/Button';
import { FaMapMarkedAlt, FaFilter } from 'react-icons/fa';
import "../../styles/Result/Index.css";

function ResultIndex() {

  const { placeID } = useParams();
  const [showFilter, setShowFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const [position, setPosition] = useState({});
  // Get the current position by nabigator when dom loaded.
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position);
    });
  }, []);

  function handleShowMap() {
    console.log("toggle Map component.");
    if (showMap === false) {
      setShowMap(true);
    } else if (showMap === true) {
      setShowMap(false);
    }
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

      <Map position={position} isShow={showMap} />
      <div className="placeContainer">

        <div className="functionContainer">

          <Button type="primary" onClick={handleShowMap}>
            <FaMapMarkedAlt />
            <span>Map</span>
          </Button>

          <Button type="primary" onClick={handleShowFilter}>
            <FaFilter />
            <span>Filter</span>
          </Button>

        </div>

        <List position={position}/>

        <Filter isShow={showFilter} callback={closeFilter} />

      </div>

      


    </div>
  );
}

export default ResultIndex;