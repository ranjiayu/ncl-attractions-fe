/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 17:36:41
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-05-07 23:16:02
 * @Description: Every place item in the list
 */

import { useNavigate } from 'react-router-dom';
import Star from './Star';
import config from '../../config';
import convertType from '../../utils/convertType';
import "../../styles/Result/PlaceItem.css";

function PlaceItem({item}) {

  const navigate = useNavigate();

  /**
   * handle click, to detail page
   */
  function handleToDetail() {
    console.log('To placeID: ' + item.placeID);
    navigate("/place/" + item.placeID);
  }
  // Get place picutre from google map by place-reference.
  let picUrl;
  if (item.reference) {
    picUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.reference}&key=${config['MAP_API_KEY']}`;
  }
  return (
    <div data-testid="handleToDetail" className="placeItem" onClick={handleToDetail}>
      <img className="placeItemImg" src={picUrl} alt={item.name} />
      <div className="placeItemInfo">
        <p className="placeTitle">{item.name}</p>
        <div className="placeMile"><p>1.0 mile</p></div>
        <p className="placeType">{convertType(item.type)}</p>
        <Star rate={item.rate} />
      </div>

    </div>
  );
}

export default PlaceItem;