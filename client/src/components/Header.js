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
  a {
    margin: 20px;
    color: #696969;
    text-align: center;
  }
`;
//header component for everypage
const Header = () => {
  return (
    <>
      <Logo>ESHOP</Logo>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Categories">Categories</NavLink>
        <NavLink to="/Companies">Companie</NavLink>
      </Navbar>
    </>
  );
};

export default Header;
