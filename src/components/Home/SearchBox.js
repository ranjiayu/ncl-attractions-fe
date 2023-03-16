/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-11 00:18:15
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-16 16:01:04
 * @Description: Search input box component
 */
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "../../styles/Home/SearchBox.css";

function SearchBox(props) {

  const [searchName, setSearchName] = useState('');

  function handleOnChange(e) {
    setSearchName(e.target.value);

    // pass message to the father component
    props.onChange(e);
  }

  function handleClickSearch(e) {
    console.log('Search:' + searchName);
  }

  return (

    <div className="searchBox">
      <input type="text"
        placeholder="Where next?" 
        value={searchName}
        onChange={handleOnChange} />
      <div className="searchButton" onClick={handleClickSearch}><FaSearch size="26px"/></div>
    </div>

  );
}

export default SearchBox;