/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-16 12:51:46
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-21 14:50:41
 * @Description: The every place item of dropdown menu.
 */

function DropdownItem(props) {


  const Distance = function() {
    if (props.distance) {
      return <span>{(props.distance / 1609).toFixed(2)} mile</span>;
    }
    return <e></e>;
  }

  return (
    <div className="dropdown-item" onClick={props.onClick}>
      <div className="dropdown-item-left">
        <p className="dropdown-item-name">{props.name}</p>
        <p className="dropdown-item-type">{props.type}</p>
      </div>
      <div className="dropdown-item-right">
        <div className="dropdown-item-distance">
          <Distance />
        </div>
      </div>
    </div>
  );
}

export default DropdownItem;