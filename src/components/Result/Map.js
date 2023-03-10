/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:28:32
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-10 19:40:00
 * @Description: Map component, which receives a location paramter as the map center
 */

import { Wrapper } from '@googlemaps/react-wrapper';
import config from '../../config';
import { useRef, useEffect, useState } from 'react';

function MyMap({center}) {
  const ref = useRef(null);
  const [map, setMap] = useState();
  if (!center) {
    center = {lat: 54.975711410771844, lng: -1.6217457525113201};
  }
  useEffect(() => {
    // init map
    if (ref.current && !map) {
      console.log("init center:", center);
      setMap(new window.google.maps.Map(ref.current, {
        center: center,
        zoom: 16
      }));
    } else {
      // update
      console.log("update: ", center)
      map.setCenter(center);
    }
  }, [ref, map, center]);
  return (
    <div ref={ref} id="map" style={{height: '500px', width: '500px'}} />
  );
}


const Map = ({center}) => (
  <Wrapper apiKey={config['MAP_API_KEY']}>
    <MyMap center={center} />
  </Wrapper>
);


export default Map;