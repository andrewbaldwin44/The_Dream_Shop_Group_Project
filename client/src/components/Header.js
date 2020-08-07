import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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
  a {
    color: black;
    text-decoration: none;
    margin-right: 10px;
    list-style: none;
    font-family: "Lato", sans-serif;
    font-weight: bold;
  }
  a:hover {
    background-color:blue;
    border-radius: 30px;
  }
  .navLink {
    color: black;
  }
 
`;
const Header = () => {
  return (
    <>
      <Logo>ESHOP</Logo>
      <Navbar>
        <NavLink></NavLink>
      </Navbar>
    </>
  );
};

export default Header;
