import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Dropdown from "./Dropdown" ;

import styled from "styled-components";
import StoreItem from "./StoreItem";
import cart from "../assets/cart.png";

const Header = () => {
  const categories = useSelector((state) => state.items.categories);
  const history = useHistory();

  const navigateTocategory = category => {
    history.push(`/products/${category.toLowerCase()}`);
  }

  return (
    <>
      <Logo>ESHOP</Logo>
      <Navbar>
        <NavLink style={{ marginLeft: "300px" }} exact to="/">
          Home
        </NavLink>
        <Dropdown
          items={categories}
          clickCallback={navigateTocategory}
          id={'category'}
        />
        <NavLink exact to="/cart">
          <Carting src={cart} />
        </NavLink>
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  background-color: white;
  height: var(--navbar-height);
  margin-top: 15px;
  border: 1px solid black;
  border-right: none;
  border-left: none;
  display: flex;
  align-items: center;
  font-weight: bold;

  a {
    margin: 40px;
  }
`;

const Logo = styled.h1`
  color: black;
  font-size: 50px;
`;

const Carting = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 600px;
`;

export default Header;
