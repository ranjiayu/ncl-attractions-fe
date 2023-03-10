/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:29:10
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-10 19:40:59
 * @Description: Result index page
 */

import List from './List';
import Map from './Map';
import { useState, useEffect } from 'react';

function ResultIndex() {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    setDefaultLocation();
  }, []);

  function setDefaultLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({lat: position.coords.latitude , lng: position.coords.longitude});
      });
    }
  }

  const LoadingTip = ({status}) => {
    if (status) {
      return <p>Loading current location....</p>
    }
    return <p>load location done.</p>
  }

  return (
    <div>
      <h1>Result Index</h1>
      <LoadingTip status={!!!center} />
      <Map center={center}  />
      <List />
    </div>
  );
}

export default ResultIndex;