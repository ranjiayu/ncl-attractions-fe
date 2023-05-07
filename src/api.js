/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 18:09:13
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-05-07 23:14:34
 * @Description: Define the http api uri and methods
 */

// define the host, this is for production environment
const host = "https://16.16.179.85.nip.io:8002";
// this is for local environment
// const host = "http://localhost:8001";


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