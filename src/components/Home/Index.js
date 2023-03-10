/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:19:47
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-10 19:55:45
 * @Description: Home page
 */

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeIndex() {

  const [placeName, setPlaceName] = useState('');
  const navigate = useNavigate();

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
  }

  function handleSearch() {
    console.log("search:" + placeName);
    navigate("/result/" + placeName);

  }

  return (
    <div className="Home">
      <header>
        <p>Home</p>

        <input type="text" onChange={handlePlaceNameChange} />
        <button onClick={handleSearch}>Search</button>


      </header>
    </div>
  );
}

export default HomeIndex;
