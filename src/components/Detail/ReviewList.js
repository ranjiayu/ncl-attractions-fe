/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-08 14:47:38
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-24 10:45:13
 * @Description: Description
 */
import { Link } from 'react-router-dom';
import "../../styles/Detail/ReviewList.css";
import { useParams } from 'react-router-dom';

function ReviewList(props) {
  const review = props.review || [];
  console.log(review);
  const placeDetail = props.placeDetail;
  const urlParams = useParams();

  function rateStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
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
            {rateStars(item.rating)}
          </p>
          <p className="content">
            {item.commentText}
          </p>
          <p className="date">
            {item.commentDateTime}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ReviewList;