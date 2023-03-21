/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-15 21:15:00
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-21 10:44:10
 * @Description: Common header
 */
import config from "../../config";
import logo from "../../images/logo.png";

function AppHeader() {

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <span>{config['APP_NAME']}</span>
    </div>
  );


}

export default AppHeader;