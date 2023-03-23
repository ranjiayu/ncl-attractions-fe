/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:28:32
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-23 13:16:02
 * @Description: Map component, which receives a location paramter as the map center
 */
import { isValidElement, Children, cloneElement } from 'react';
import { useRef, useEffect, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import Marker from "./Marker";
import config from '../../config';

function MyMap(props) {
  // get position from external components
  const position = props.position;

  const ref = useRef(null);
  const [map, setMap] = useState();
  // test
  let center = {};
  if (position && position.coords) {
    center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
  }

  useEffect(() => {
    // init map
    if (ref.current && !map) {
      console.log("init center:", center);
      if (center.lat && center.lng) {
        setMap(new window.google.maps.Map(ref.current, {
          center: center,
          zoom: 16
        }));
      }

    } else {
      // update
      console.log("update: ", center);
      if (center.lat && center.lng) {
        map.setCenter(center);
      }
    }
  }, [ref, map, center]);

  return (
    <>
    <div ref={ref} id="map" style={{height: '500px', width: '500px'}} />
    {Children.map(props.children, (child) => {
      // console.log(child);
        if (isValidElement(child)) {
          return cloneElement(child, { map });
        }
      })}
    </>
  );
}


const Map = (props) => {

  if (!props.isShow) {
    return <div></div>;
  }

  return (
    <Wrapper apiKey={config['MAP_API_KEY']}>
      <MyMap position={props.position}>
        <Marker position={{lat: 54.97440121426228, lng: -1.6244824149688482}} />
      </MyMap>
    </Wrapper>
  );
}


export default Map;