import React, { useState } from "react";
import List from "./List";
import Form from "./Form";

const Main = ({ items, handleAddItem, handleDeleteItem, handleDoneItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div>
      <Form handleAddItem={handleAddItem} />
      <ul className="mainWrapper">
        {sortedItems.map((item) => (
          <List
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleDoneItem={handleDoneItem}
          />
        ))}
      </ul>
      <div>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sorted By Input</option>
          <option value="packed">Sorted By Packed</option>
        </select>
      </div>
    </div>
  );
};
export default Main;
