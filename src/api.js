/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 18:09:13
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-16 16:39:26
 * @Description: Define the http api uri and methods
 */

const host = "http://localhost:8001";

const getApi = {
  'getNearbyAttractions': '/getNearbyAttractions',
  'getAutoComplete': '/getAutoComplete',
};

export default {
  host: host,
  getApi: getApi
};