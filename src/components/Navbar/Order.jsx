import React from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

const Item = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`;

const Img = styled("img")`
  width: 70px;
`;

const Title = styled("h2")`
  font-size: 20px;
`;

const Icon = styled(FaTrash)`
  transition: all 0.3s;
  :hover {
    color: red;
  }
`;

const Order = ({ items, onDelete }) => {
  console.log(items);
  return (
    <Item className="item">
      <Img src={items.img} alt="" />
      <Title>{items.name}</Title>
      <Icon className="delete-icon" onClick={() => onDelete(items.id)} />
    </Item>
  );
};

export default Order;
