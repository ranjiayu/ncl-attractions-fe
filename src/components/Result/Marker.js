/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-23 12:51:28
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-05-07 23:15:46
 * @Description: Map Marker Component
 */
import { useEffect, useState } from "react";

const Marker = (options) => {

  const [marker, setMarker] = useState();
  const onClickCB = options.onClick;

  useEffect(() => {
    // if there is no marker already, just make one.
    if (!marker) {
      let m = new window.google.maps.Marker();
      setMarker(m);
      // add a click event
      m.addListener("click", () => {
        onClickCB();
      });
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
        marker.addListener("click", () => {
          onClickCB();
        });
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