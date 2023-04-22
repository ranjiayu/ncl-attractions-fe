/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-21 16:54:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-23 00:21:01
 * @Description: Description
 */
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import AppHeader from '../Common/Header';
import Info_header from "./Info_header";
import Star from "./Star";
import Button from "../Common/Button";
import "../../styles/Detail/PostReview.css";
import api from '../../api';

function PostReview() {

  const urlParams = useParams();
  let [searchParams] = useSearchParams();
  const [userName, setUserName] = useState("");
  const [rate, setRate] = useState(0);
  const [content, setContent] = useState("");
  const [placeName, setPlaceName] = useState("");

  useEffect(() => {
    let name = searchParams.get("name");
    setPlaceName(name);

  }, []);

  function handleContentChange(e) {
    setContent(e.target.value);
  }

  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  function handleSubmit() {
    if (rate < 1 || userName === "" || content === "" || !urlParams.id) {
      alert("Please check input!");
      return;
    }
    let postData = {
      rating: rate,
      commentText: content,
      locationId: urlParams.id,
      name: userName,
    };
    // give a post request to submit
    fetch(api.host + api.postApi['postComment'], {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(resp => resp.json())
    .then(data => {
      if (data && data.id) {
        console.log("Review submitted!");
        console.log(data);
        alert("Review submitted.");
        window.history.back();
      }
    });
  }

  // function handleCancel() {
  //   setUserName("");
  //   setContent("");
  // }

  function handleRateChange(value) {
    setRate(value);
  }



  return (
    <div>
      <AppHeader />

      <Info_header placeName={placeName} />

      <div className="post-review-inline">
        <p className="post-review-title">Click stars to rate</p>
        <div style={{fontSize: "40px", display: "flex", justifyContent: "center", alignContent: "center", width: "100%", "marginTop": "20px", color: "#fbbb0d"}}>
          <Star onChange={handleRateChange} />
        </div>

      </div>

      <div className="post-review-inline">
        <p className="post-review-title">Leave a review</p>
        <textarea onChange={handleContentChange} className="post-review-textarea" rows={10}></textarea>
      </div>
      
      <div className="post-review-inline">
        <p className="post-review-title">Name</p>
        <input onChange={handleNameChange} className="post-review-input" type="text" />
      </div>

 
      <div className="post-review-inline" style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button onClick={handleSubmit}>Submit</Button>
        {/* <Button onClick={handleCancel}>Cancel</Button> */}
      </div>
    </div>
  );
  
}

export default PostReview;