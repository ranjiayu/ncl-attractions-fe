/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 16:28:27
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-10 19:40:48
 * @Description: Places list
 */

import PlaceItem from "./PlaceItem";

function List() {
  return (
    <div>
      <p>List result</p>

      <ul>
        <li>
          <PlaceItem item={{name: 'test1', distance: 0.5}} />
        </li>
        <li>
          <PlaceItem item={{name: 'test2', distance: 1.1}} />
        </li>
        <li>
          <PlaceItem item={{name: 'test3', distance: 2}} />
        </li>
        <li>
          <PlaceItem item={{name: 'test4', distance: 2.2}} />
        </li>
      </ul>
    </div>
  );


}

export default List;