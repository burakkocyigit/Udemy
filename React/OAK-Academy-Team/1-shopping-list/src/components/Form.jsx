import React, { useState } from "react";

const Form = ({handleAddItem}) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(5);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (product) {
      const newTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      handleAddItem(newTodo);
      console.log(newTodo);
      setProduct("");
      setQuantity(1);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="select"
      >
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setProduct(e.target.value)}
        className="input"
        type="text"
        placeholder="Enter a name"
        value={product}
      />
      <button className="addBtn">Add</button>
    </form>
  );
};
export default Form;
