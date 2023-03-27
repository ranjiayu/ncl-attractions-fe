/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:28:32
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-27 16:50:54
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
  if (position) {
    center = {
      lat: position.lat,
      lng: position.lng,
    }
  }

  useEffect(() => {
    // init map
    if (ref.current && !map) {
      console.log("init center:", center);
      if (center.lat && center.lng) {

        // init map's height and width
        let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let height = screenHeight - 127;
        ref.current.style.height = height + "px";

        setMap(new window.google.maps.Map(ref.current, {
          center: center,
          zoom: 14
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
    <div ref={ref} id="map" style={{height: '300px', width: '100vw'}} />

    {/* This code is for passing `map` props to every Marker component */}
    {/* It it very magic */}
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

  const geometryData = props.data;
  

  return (
    <Wrapper apiKey={config['MAP_API_KEY']}>
      <MyMap position={props.position}>

        {/* Nearby attractions' markers */}
        { geometryData.map((item, index) => {
          return <Marker 
            position={item}
            label={index + ""}
            title={item.title}
            key={item.lat + "," + item.lng} />;
        }) }
      </MyMap>
    </Wrapper>
  );
}


export default Map;