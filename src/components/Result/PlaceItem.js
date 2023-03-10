/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 17:36:41
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-10 19:40:34
 * @Description: Every place item in the list
 */

import { Link } from 'react-router-dom';

function PlaceItem({item}) {
  return (
    <div>
      PlaceName: {item.name}, distance: {item.distance}
      &nbsp; &nbsp; <Link to="/place/1">Detail</Link>
    </div>
  );
}

export default PlaceItem;