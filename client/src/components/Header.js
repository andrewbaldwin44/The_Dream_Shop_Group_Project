import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Dropdown from "./Dropdown" ;

import styled from "styled-components";
import StoreItem from "./StoreItem";
import { GrCart } from "react-icons/gr"

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
        <RightNavigation>
          <NavLink exact to="/">
            Home
          </NavLink>
          <Dropdown
            items={categories}
            clickCallback={navigateTocategory}
            id={'category'}
          />
        </RightNavigation>
        <NavLink exact to="/cart">
          <CartIcon />
        </NavLink>
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: var(--navbar-height);
  width: 100%;
  border: 1px solid black;
  border-right: none;
  border-left: none;
  font-weight: bold;
  font-size: 1.1em;
  padding-right: 130px;
  padding-left: 300px;
`;

const RightNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
`;

const Logo = styled.h1`
  margin: 15px 10px;
  color: black;
  font-size: 50px;
`;

const CartIcon = styled(GrCart)`
  font-size: 40px;
`;

export default Header;
