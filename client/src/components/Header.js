import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestItems,
  receiveItems,
  receiveItemsError,
  resetItems,
} from "../actions";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreItem from "./StoreItem";

const Dropdown = styled(NavLink)``;
//header component for everypage
const Header = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const categoryId = useParams().categoryId;
  React.useEffect(() => {
    dispatch(requestItems());
    fetch(`/products/categories`)
      .then((res) => res.json())
      .then((data) => data.productsData)
      .then((items) => dispatch(receiveItems(items)))

      .catch((err) => dispatch(receiveItemsError()));
    // eslint-disable-next-line
    return () => dispatch(resetItems());
  }, []);
  console.log(items)
  return (
    <>
      <Logo>ESHOP</Logo>
      <Navbar>
        <NavLink exact to="/">
          Home
        </NavLink>
        <div>
          Categories
          <Dropdown exact to="/products/category">
            <ul></ul>
          </Dropdown>
        </div>

        <NavLink exact to="/brands">
          brands
        </NavLink>
        <NavLink exact to="/">
          <Cartimg src="server\assets\cart.png" />
        </NavLink>
      </Navbar>
    </>
  );
};
//styling the header
const Logo = styled.h1`
  color: black;
  font-size: 50px;
`;
const Navbar = styled.div`
  background-color: white;
  height: var(--navbar-height);
  margin-top: 15px;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    margin: 20px;
    color: black;
  }
`;
<<<<<<< HEAD
const Cartimg = styled.img`
  width: 30px;
  height: 30px;
`;
=======
//header component for everypage
const Header = () => {
  return (
    <>
      <Logo>ESHOP</Logo>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Categories">Categories</NavLink>
        <NavLink to="/Companies">Company</NavLink>
      </Navbar>
    </>
  );
};

>>>>>>> 22dfd473928acc39ac7b36ff8ae6c1713168b7da
export default Header;
