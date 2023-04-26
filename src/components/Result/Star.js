/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-25 21:54:56
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 09:42:31
 * @Description: Star for place's rating
 */
import { FaStar, FaRegStar } from 'react-icons/fa';

function Star(props) {

  if (!props.rate) {
    return <></>;
  }
  // calculate star's count and outlineStar count
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
  // render them
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