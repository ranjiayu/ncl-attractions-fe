/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-03 15:37:23
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 09:34:20
 * @Description: Convert google map's type into our own type
 */

/**
 * Convert google map's type into our own type
 * @param {String} types string, split by ','
 */
function convertType(types) {
  const typeMap = {
    'library': 'Library',
    'museum': 'Museum',
    // 'point_of_interest': 'History Building',
    'history_building': 'History Building',
    'park': 'Park',
    'locality': 'Locality',
    'university': 'University',
  }
  let typeArray = types.split(",");
  if (typeArray.length === 0) {
    return 'Unknown';
  }

  let knownTypes = ['library', 'park', 'museum', 'university', 'locality', 'history_building'];
  for (let i = 0; i < typeArray.length; i ++) {
    if (knownTypes.indexOf(typeArray[i]) > -1) {
      return typeMap[typeArray[i]];
    }
  }
}

export default convertType;