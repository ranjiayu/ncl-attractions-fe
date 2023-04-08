/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:30:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-08 14:34:36
 * @Description: The place detail page
 */
import AppHeader from "../Common/Header";
import "../../styles/Detail/Index.css";
import googleImg from "../../images/google.png";
import { useEffect, useState } from "react";

function DetailIndex() {


  // state
  const [placeDetail, setPlaceDetail] = useState({name: "loading...", distance: 0});
  const [reviews, setReviews] = useState([]);


  // useEffect 第二参数为空数组，代表只执行一次，在页面加载完成的时候
  useEffect(function() {

    // 模拟发起网络请求
    // setTimeout(function() {
    //   setPlaceDetail({
    //     name: "123",
    //     distance: 1
    //   });

    //   setReviews([]);
    // }, 3000);

  }, []);



  return (
    <div>
      <AppHeader />
      <p className="test">{placeDetail.name}</p>
      <p className="test">{placeDetail.distance} mile</p>
      <img src={googleImg} />

    </div>
  );


}

export default DetailIndex;