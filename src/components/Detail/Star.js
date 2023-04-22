/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-22 12:16:56
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-22 13:07:59
 * @Description: Description
 */
import { useState } from 'react';
import {FaStar, FaRegStar} from 'react-icons/fa';

function Star(props) {

  const onChangeCallback = props.onChange;
  const [rate, setRate] = useState(new Array(5).fill(0));
  

  function handleOnClick(idx) {
    console.log("Change rate to: " + (idx + 1));
    let newRate = new Array(5).fill(0);
    // fill rate[0..idx-1] to 1
    for (let i = 0; i < idx + 1; i ++) {
      newRate[i] = 1;
    }
    setRate(newRate);
    onChangeCallback(idx + 1);
  }

  return (
    <div>
      {rate.map((item, idx) => {
        if (item > 0) {
          return <FaStar key={idx} onClick={() => handleOnClick(idx)} />;
        }
        return <FaRegStar key={idx} onClick={() => handleOnClick(idx)} />
      })}
    </div>

  );
}

export default Star;