import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  function handleFilter (event) {
    setFilterBy(event.target.value);
  }
  const [filterBy , setFilterBy] = useState("All");

  // let filterState = filterBy === "All" ? items : items.filter(item => item.category === filterBy) 

  const filterState = items.filter(item => {
      if (filterBy === "All"){
        return true;
      } else {
        return item.category === filterBy;
      }
    })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterState.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
