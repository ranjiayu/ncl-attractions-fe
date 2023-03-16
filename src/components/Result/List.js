/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:28:27
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-16 16:01:23
 * @Description: Places list, which is used in Home page 
 * and result page.
 */

import PlaceItem from "./PlaceItem";
import "../../styles/Result/List.css";
import { useEffect, useState } from "react";
import { BiLoader } from 'react-icons/bi';

function List() {

  const [loading, setLoading] = useState(true);
  const [placesData, setPlacesData] = useState([]);

  function fetchData() {
    setTimeout(() => {
      setPlacesData([
        {placeID: 1, name: "Newcastle Castle", distance: 0.2, type: "History buildings", rate: 4, pic: "https://images.squarespace-cdn.com/content/v1/5e271471e410453315a44e1a/03ab2404-f8b1-40a5-ac02-7eb9526697a2/FHCm_lQWUAMAeCY.jpg?format=500w"},
        {placeID: 2, name: "Newcastle Castle1", distance: 0.3, type: "History buildings", rate: 4, pic: "https://images.squarespace-cdn.com/content/v1/5e271471e410453315a44e1a/03ab2404-f8b1-40a5-ac02-7eb9526697a2/FHCm_lQWUAMAeCY.jpg?format=500w"},
        {placeID: 3, name: "Newcastle Castle2", distance: 0.4, type: "History buildings", rate: 4, pic: "https://images.squarespace-cdn.com/content/v1/5e271471e410453315a44e1a/03ab2404-f8b1-40a5-ac02-7eb9526697a2/FHCm_lQWUAMAeCY.jpg?format=500w"}
      ]);
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    fetchData();
  }, []);


  if (loading) {
    return (
      <div className="resultList center-container" style={{padding: '0 20px', 'flexDirection': 'column', 'color': '#8B8B8B'}}>
        <div style={{flex: '1'}}>
          <BiLoader style={{'fontSize': '40px'}}/>
        </div>
        <p style={{'fontSize': '20px'}}>Loading....</p>
      </div>
    );
  }
  return (
    <div className="resultList">
      <ul>
        {placesData.map((item) => {
          return <PlaceItem key={item.placeID} item={item}></PlaceItem>
        })}
      </ul>
    </div>
  );


}

export default List;