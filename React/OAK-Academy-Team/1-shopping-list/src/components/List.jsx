import React from "react";

const List = ({ item, handleDeleteItem, handleDoneItem }) => {
  const { id, product, quantity, packed } = item;
  return (
    <li className="listWrapper">
      <span>{quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div>
        <button onClick={() => handleDoneItem(id)} className="doneBtn">
          Done
        </button>
        <button onClick={() => handleDeleteItem(id)} className="deleteBtn">
          Delete
        </button>
      </div>
    </li>
  );
};
export default List;
