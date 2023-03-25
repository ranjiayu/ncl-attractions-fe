/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:29:10
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-25 22:57:28
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
  const [geometryData, setGeometryData] = useState([]);
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

  // When the list component has loaded the result, invoke this
  function handleOnLoaded(results) {
    console.log("Result Index get data from List:");
    console.log(results);
    let positionData = [];
    for (let i = 0; i < results.length; i ++) {
      let tmp = results[i].geometry.location;
      positionData.push(tmp);
    }
    setGeometryData(positionData);
  }

  return (
    <div className="resultIndex">
      <div style={{padding: '5px', background: '#d7e9fb'}}>
        <SearchBox name={placeID}/>
      </div>

      <div className="placeContainer">

        {/* function controller bar */}
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

        {/* Map component */}
        <Map
          position={position}
          isShow={showMap}
          data={geometryData}
        />

        {/* Place List */}
        <List
          position={position}
          isShow={!showMap} 
          onLoaded={handleOnLoaded}
        />

        {/* Filter Mask */}
        <Filter isShow={showFilter} callback={closeFilter} />

      </div>

      


    </div>
  );
}

export default ResultIndex;