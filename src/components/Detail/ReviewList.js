/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-08 14:47:38
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 09:38:23
 * @Description: Description
 */
import { Link } from 'react-router-dom';
import "../../styles/Detail/ReviewList.css";
import { useParams } from 'react-router-dom';
import formatTime from '../../utils/formatTime';
import {FaStar, FaRegStar} from "react-icons/fa";

function ReviewList(props) {
  const review = props.review || [];
  const placeDetail = props.placeDetail;
  const urlParams = useParams();

  /**
   * Return star elements
   * @param {Number} rating 
   * @returns Element[]
   */
  function rateStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  }

  return (
    <div className="reviewList">
      <div className="review">
        <p className="reviewHead">
          Reviews
        </p>
        <p className="writeReview">
          <Link to={"/postReview/" + urlParams.id + "?name=" + placeDetail.name}>
            Write a review
          </Link>
        </p>
      </div>
      {review.map(item => (
        <div className="item" key={item.id}>
          <p className="username">
            {item.name}
          </p>
          <p className="rate">
            {rateStars(item.rating).map((item) => {
              return item;
            })}

          </p>
          <p className="content">
            {item.commentText}
          </p>
          <p className="date">
            {formatTime(item.commentDateTime)}
          </p>
          <hr />
        </div>
      ))}

      {review.length === 0
        ? 
        <div className="noCommentDiv">No comments</div>
        :
        <div></div>
      }
    </div>
  );
}

export default ReviewList;