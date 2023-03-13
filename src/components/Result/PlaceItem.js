/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 17:36:41
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-13 22:10:30
 * @Description: Every place item in the list
 */

import { useNavigate } from 'react-router-dom';
import "../../styles/Result/PlaceItem.css";

function PlaceItem({item}) {

  const navigate = useNavigate();

  function handleToDetail() {
    console.log('To placeID: ' + item.placeID);
    navigate("/place/" + item.placeID);
  }

  return (
    <div className="placeItem" onClick={handleToDetail}>
      <img className="placeItemImg" src={item.pic} alt={item.name} />
      <div className="placeItemInfo">
        <p className="placeTitle">{item.name}</p>
        <div className="placeMile"><p>{item.distance}mile</p></div>
        <p className="placeType">{item.type}</p>
        {/* <p className="placeRate">{item.rate}</p> */}
      </div>

    </div>
  );
}

export default PlaceItem;