/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-08 14:47:38
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-08 14:51:18
 * @Description: Description
 */
function ReviewList(props) {

  let name = props.name;
  let date = props.date;
  let content = props.content;

  return (
    <div>
      {name}
      {date}
      {content}
    </div>
  );
}

export default ReviewList;