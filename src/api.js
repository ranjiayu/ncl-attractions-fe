/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 18:09:13
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 16:06:07
 * @Description: Define the http api uri and methods
 */

const host = "http://localhost:8001";


// All get action URLs
const getApi = {
  'getNearbyAttractions': '/place/getNearbyAttractions',
  'getAutoComplete': '/place/getAutoComplete',
  'getDetails': '/place/getDetails',
  'getComments': '/comments/',
  'getPlaceExtraInfo': '/place/getExtraInfo',
};

// All post action URLs
const postApi = {
  'postComment': '/comments/',
};

export default {
  host: host,
  getApi: getApi,
  postApi: postApi,
};