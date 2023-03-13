/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-11 00:18:15
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-13 22:13:26
 * @Description: Description
 */
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "../../styles/Home/SearchBox.css";

function SearchBox({name}) {

  const [searchName, setSearchName] = useState(name);

  function handleOnChange(e) {
    setSearchName(e.target.value);
  }

  function handleClickSearch(e) {
    console.log('Search:' + searchName);
  }

  return (
    <div className="searchBox">
      <input type="text" placeholder="Where next?" value={searchName} onChange={handleOnChange} />
      <div className="searchButton" onClick={handleClickSearch}><FaSearch size="26px"/></div>
    </div>
  );
}

export default SearchBox;