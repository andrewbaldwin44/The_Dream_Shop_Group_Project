import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//styling the header
const Logo = styled.h1`
  color: black;
  font-size: 50px;
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  border: 1px solid black;
  background-color:#fff;
  }
 
`;
//header component for everypage
const Header = () => {
  return (
    <ul>
      <Logo>ESHOP</Logo>
      <Navbar>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/Categories">
          <li>Categories</li>
        </NavLink>
        <NavLink to="/Companies">
          <li>Companies</li>
        </NavLink>
      </Navbar>
    </ul>
  );
};

export default Header;
