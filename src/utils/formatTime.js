/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-24 15:10:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 09:34:36
 * @Description: format standard time to YYYY-mm-dd HH:MM:SS
 */

/**
 * format standard time to YYYY-mm-dd HH:MM:SS
 * @param {String} dateString 
 */
function formatTime(dateString) {
  let d = new Date(dateString);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;


}

export default formatTime;