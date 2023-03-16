/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-14 12:15:26
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-14 14:03:06
 * @Description: Description
 */
function Button(props) {
  return (
    <button
      className={'button button-' + props.type } 
      onClick={props.onClick}
      style={props.style}
      >
      {props.children}
    </button>
  );
}

export default Button;