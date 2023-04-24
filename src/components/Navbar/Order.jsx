import React from "react";
import { FaTrash } from "react-icons/fa";

const Order = (items) => {
  console.log(items);
  return (
    <div className="item">
      <img src={items.img} alt="" />
      <h2>{items.item.title}</h2>
      <b>{items.item.price}</b>
      <FaTrash
        className="delete-icon"
        onClick={() => items.onDelete(items.item.id)}
      />
    </div>
  );
};

export default Order;
