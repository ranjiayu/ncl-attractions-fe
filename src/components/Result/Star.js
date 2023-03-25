/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-25 21:54:56
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-25 22:00:11
 * @Description: Description
 */
import { FaStar, FaRegStar } from 'react-icons/fa';

function Star(props) {

  if (!props.rate) {
    return <></>;
  }

  const starCount = parseInt(props.rate);
  const outlineStarCount = 5 - starCount;

  const starArray = new Array(starCount).fill(0);
  for (let i = 0; i < starCount; i ++) {
    starArray[i] = i;
  }

  const outlineStarArray = new Array(outlineStarCount).fill(0);
  for (let i = 0; i < outlineStarCount; i ++) {
    outlineStarArray[i] = i;
  }

  if (props.rate > 0) {
    return (
      <div style={{color: '#fbbb0d'}}>
          { starArray.map((key, value) => {
            return <FaStar key={value} />
          }) }
          { outlineStarArray.map((key, value) => {
            return <FaRegStar key={value} />
          }) }
      </div>
    );
  }

}

export default Star;