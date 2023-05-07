/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-14 13:26:46
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-05-07 23:16:59
 * @Description: Place type filter
 */
import { useState } from "react";
import Button from "../Common/Button";
import "../../styles/Result/Filter.css";

function Filter(props) {
  // known types
  const allTypes = ['History buildings', 'Museums', 'Libraries', 'Parks'];
  const typeMap = {
    'History buildings': 'history_building',
    'Museums': 'museum',
    'Libraries': 'library',
    'Parks': 'park',
  };
  const [selectedType, setSelectedType] = useState([]);
  
  /**
   * Click type
   * @param {String} type 
   */
  function handleClickType(type) {
    let selected;
    if (selectedType.indexOf(type) === -1) {
      selected = selectedType.concat(type);
    } else {
      selected = [...selectedType];
      selected.splice(selected.indexOf(type), 1);
    }
    setSelectedType(selected);
  }

  function handleClickMask(e) {
    if (e.target.className === 'filter-all') {
      props.callback();
    }
  }

  /**
   * When click 'show results', convert types into types used in server
   * eg. Libraries -> library, Museums -> museum
   */
  function handleShowResult() {
    console.log(selectedType);
    let newSelectedType = [];
    selectedType.map((item, index) => {
      if (item in typeMap) {
        newSelectedType.push(typeMap[item]);
      }
    });
    console.log("Change selected type to:", newSelectedType);
    props.clickCallback(newSelectedType);
  }

  if (!props.isShow) {
    return <div></div>
  }

  return (
    <div className="filter-all" onClick={handleClickMask}>

      <div className="filter-select-box">
        <p style={{'color': '#63ACF0', 'fontWeight': 900, 'lineHeight': '24px', 'fontSize': '20px'}}>Type of attractions</p>
        <br />

        {allTypes.map((k, v)=> {
          return (
            <Button 
              type={selectedType.indexOf(k) !== -1 ? 'primary' : 'default'}
              onClick={() => handleClickType(k)}
              style={{'marginBottom': '12px'}}
              key={v}>{k}
            </Button>
          );
        })}

        <div className="showResultBtn">
          <Button type="primary" onClick={handleShowResult}>Show results</Button>
        </div>

      </div>

    </div>
  );

}


export default Filter;