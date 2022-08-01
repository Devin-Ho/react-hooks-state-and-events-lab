import React, {useState} from "react";

function Item({ name, category }) {
  let [isOn, setIsOn] = useState (false)
  function handleClick (event) {
    setIsOn(!isOn)
    // if (setIsOn((isOn) = !isOn)) {
    //   event.target.style.removeProperty('text-decoration');
    // } else {
    //   event.target.style.setProperty('text-decoration', 'line-through')
    // }
  }

  const color = isOn ? "purple" : "yellow";
  return (
    <li className={isOn ? 'in-cart': ""} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style = {{background: color}} className="add" onClick = {handleClick}> {isOn ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
