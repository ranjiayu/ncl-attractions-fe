/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-21 14:13:32
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-21 14:30:17
 * @Description: Error component
 */
import errorImg from "../../images/error.png";

function Error() {
  return (
    <div className="error-msg">
      <div className="error-box">
        <img src={errorImg} />
      </div>
      <p>Something gose wrong.</p>
    </div>
  );
}

export default Error;