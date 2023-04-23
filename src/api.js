/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 18:09:13
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-23 16:15:51
 * @Description: Define the http api uri and methods
 */

const host = "http://localhost:8001";

const getApi = {
  'getNearbyAttractions': '/place/getNearbyAttractions',
  'getAutoComplete': '/place/getAutoComplete',
  'getDetails': '/place/getDetails',
  'getComments': '/comments/'
};

const postApi = {
  'postComment': '/comments/',
};

export default {
  host: host,
  getApi: getApi,
  postApi: postApi,
};