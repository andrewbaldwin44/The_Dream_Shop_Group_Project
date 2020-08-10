import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//styling the header
const Logo = styled.h1`
  color: black;
  font-size: 50px;
`;
const Navbar = styled.div`
  background-color: white;
  min-height: 70px;
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
//header component for everypage
const Header = () => {
  return (
    <>
      <Logo>ESHOP</Logo>
      <Navbar>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/products/category">
          Categories
        </NavLink>
        <NavLink exact to="/brands">
          brands
        </NavLink>
      </Navbar>
    </>
  );
};

export default Header;
