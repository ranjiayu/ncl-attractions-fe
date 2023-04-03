/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:29:10
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-03 17:20:08
 * @Description: Result index page
 */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
// components
import SearchBox from '../Home/SearchBox';
import List from './List';
import Map from './Map';
import Filter from './Filter';
import Button from '../Common/Button';
import Dropdown from '../Home/Dropdown';
import { FaMapMarkedAlt, FaFilter, FaListUl } from 'react-icons/fa';
import "../../styles/Result/Index.css";

function ResultIndex() {

  const { placeID } = useParams();
  const [placeName, setPlaceName] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [placeType, setPlaceType] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [position, setPosition] = useState({});
  const [geometryData, setGeometryData] = useState([]);
  let timer;

  useEffect(() => {
    // invoke getDetails API to get the geometry of the searching place
    fetch(api.host + api.getApi['getDetails'] + "?placeID=" + placeID, {
      method: "GET",
      mode: "cors",
    })
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      console.log(resp);
      if (resp && resp.result) {
        // set the location
        let location = resp.result.geometry && resp.result.geometry.location;
        console.log("Current position:");
        console.log(location);
        setPosition(location);
      }
    })


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

  /**
   * 
   * @param {Array} t array of types
   */
  function handleClickCallback(t) {
    // when placeType changes, the <List> component will re-render.
    setPlaceType(t);
  }

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
        
        console.log("show dropdown");
      }

    }, 1500);
  }

  // When the list component has loaded the result, invoke this
  function handleOnLoaded(results) {
    console.log("Result Index get data from List:");
    console.log(results);
    let positionData = [];
    // add nearby attractions' location information
    for (let i = 0; i < results.length; i ++) {
      let tmp = results[i].geometry.location;
      tmp.title = results[i].name;
      tmp.label = i + "";
      positionData.push(tmp);
    }
    setGeometryData(positionData);
  }

  function MapListButton() {
    if (showMap) {
      return (
        <>
          <FaListUl />
          <span>List</span>
        </>
      );
    }
    return (
      <>
        <FaMapMarkedAlt />
        <span>Map</span>
      </>
    );
  }

  return (
    <div className="resultIndex">
      <div style={{padding: '5px', background: '#d7e9fb'}}>
        <SearchBox 
          name={placeID} 
          onChange={handlePlaceNameChange}>
            <Dropdown 
              isShow={showDropdown}
              placeName={placeName}
              position={position}
            />

        </SearchBox>

      </div>

      <div className="placeContainer">

        {/* function controller bar */}
        <div className="functionContainer">
          <Button type="primary" onClick={handleShowMap}>

            <MapListButton />

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
          placeType={placeType}
          isShow={!showMap} 
          onLoaded={handleOnLoaded}
        />

        {/* Filter Mask. TODO: when filter's conditions changed, refresh list */}
        <Filter
          isShow={showFilter}
          callback={closeFilter}
          clickCallback={handleClickCallback}
        />

      </div>

      


    </div>
  );
}

export default ResultIndex;