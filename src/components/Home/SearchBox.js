/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-11 00:18:15
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-03 15:33:16
 * @Description: Search input box component
 */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import "../../styles/Home/SearchBox.css";

function SearchBox(props) {

  const [searchName, setSearchName] = useState('');
  let [searchParams] = useSearchParams();
  let name = searchParams.getAll("name");

  function handleOnChange(e) {
    setSearchName(e.target.value);

    // pass message to the father component
    props.onChange(e);
  }

  function handleClickSearch(e) {
    console.log('Search:' + searchName);
  }

  // if there is search name given by default, like on the 'result' page.
  // go to setSearchName
  useEffect(() => {
    if (name) {
      setSearchName(name);
    }
  }, []);

  return (

    <div className="searchBox">
      <input type="text"
        placeholder="Change location" 
        value={searchName}
        onChange={handleOnChange} />
      <div className="searchButton" onClick={handleClickSearch}><FaSearch size="26px"/></div>
      {props.children}
    </div>

  );
}

export default SearchBox;