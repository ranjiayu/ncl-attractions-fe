/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-23 12:51:28
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-27 16:50:52
 * @Description: Map Marker Component
 */
import { useEffect, useState } from "react";

const Marker = (options) => {

  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  
  useEffect(() => {
  
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

export default Marker;