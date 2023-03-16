/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-14 13:26:46
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-14 15:12:06
 * @Description: Description
 */
import { useState } from "react";
import Button from "../Common/Button";
import "../../styles/Result/Filter.css";
function Filter(props) {
  const allTypes = ['History buildings', 'Museums', 'Libraries', 'Parks'];
  const [selectedType, setSelectedType] = useState([]);
  
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


      </div>

    </div>
  );

}


export default Filter;