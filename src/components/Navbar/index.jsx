import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../../images/logo.png";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";
import Order from "./Order";

const Header = styled.header`
  background: #5f88c5;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Box = styled(Container)`
  padding: 20px 0;
`;
const Li = styled("li")`
  list-style: none;
  color: white;
  text-decoration: none;
`;
const Ul = styled.ul`
  display: flex;
  gap: 3em;
  list-style: none;
`;

const Links = styled(Link)`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
`;

const LiSearch = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Input = styled("input")`
  border: none;
  border-radius: 50px;
  padding: 0.4rem 1rem;
  font-size: 18px;
`;

const ShopCart = styled("div")`
  position: absolute;
  top: 60px;
  right: 0;
  width: 450px;
  background: #fafafa;
  -webkit-box-shadow: 4px 5px 15px -7px #606060;
  box-shadow: 4px 5px 15px -7px #606060;
  z-index: 1000;
  padding: 20px;
  padding-bottom: 0;
`;

const links = [
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Products",
    link: "/product",
  },
  {
    name: "Feltilizer",
    link: "/feltilizer",
  },
  {
    name: "Guide",
    link: "/guide",
  },
];

const Navbar = ({ orders, onDelete }) => {
  console.log(orders);
  let [cartOpen, setCartOpen] = useState(false);
  console.log(cartOpen);
  let summa = 0;
  orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  const showOrders = () => {
    return (
      <div>
        {orders.map((el) => (
          <Order onDelete={onDelete} items={el} />
        ))}
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty" style={{ margin: "0 0 10px 0" }}>
        <h2>Товаров нет</h2>
      </div>
    );
  };

  return (
    <Header>
      <Box>
        <Nav>
          <Ul>
            {links.map((item) => (
              <Li>
                <Links to={item.link}>{item.name}</Links>
              </Li>
            ))}
          </Ul>
          <Ul>
            <LiSearch>
              <Input type="search" />
              <AiOutlineSearch color="white" size={20} />
            </LiSearch>
            <LiSearch>
              <Links to="/login">
                <BsPersonFill />
              </Links>
            </LiSearch>
            <LiSearch>
              <AiOutlineShoppingCart
                color="white"
                style={{ cursor: "pointer" }}
                className={`shop-cart-button ${cartOpen && "active"}`}
                onClick={() => setCartOpen(!cartOpen)}
              />
              {cartOpen && (
                <ShopCart className="shop-cart">
                  {orders.length > 0 ? showOrders(orders) : showNothing()}
                </ShopCart>
              )}
            </LiSearch>
          </Ul>
        </Nav>
      </Box>
    </Header>
  );
};

export default Navbar;
