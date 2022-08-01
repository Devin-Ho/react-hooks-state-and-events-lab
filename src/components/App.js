import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  let [isOn, setIsOn] = useState (false)
  function handleClick () {
    setIsOn(!isOn)
   
    // replace 'false' with a state variable that can be toggled between true and false
    // this will be used for the Dark Mode Toggle feature
  }
  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>{isOn ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
