import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
import StoreItem from "./StoreItem";
import cart from "../assets/cart.png";
//header component for everypage
const Header = () => {
  const categories = useSelector((state) => state.items.categories);
  const brands = useSelector((state) => state.items.brands);
  return (
    <>
      <Logo>ESHOP</Logo>
      <Navbar>
        <NavLink style={{ marginLeft: "300px" }} exact to="/">
          Home
        </NavLink>
        <DropdownButton id="dropdown-basic-button" title="Categories">
          {categories.map((data) => {
            return (
              <Dropelements>
                <Dropdown.Item href={`/products/${data.toLowerCase()}`}>
                  {data}
                </Dropdown.Item>
              </Dropelements>
            );
          })}
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Brands">
          {brands.map((data) => {
            console.log(data.name);
            return (
              <Dropelements>
                <Dropdown.Item href={`/products/${data.name.toLowerCase()}`}>
                  {data.name}
                </Dropdown.Item>
              </Dropelements>
            );
          })}
        </DropdownButton>
        <NavLink exact to="/cart">
          <Carting src={cart} />
        </NavLink>
      </Navbar>
    </>
  );
};
//styling the header

const Dropelements = styled.div`
  z-index: 5;
  background-color: #fff;
  border: 0.5px solid black;
  color: black;
  padding: 10px;
  font-weight: normal;
  &:hover {
    background-color: #dcdcdc;
  }
`;
const Carting = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 600px;
`;
const Logo = styled.h1`
  color: black;
  font-size: 50px;
`;
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
    text-decoration: none;
    margin: 40px;
    color: black;
  }
  #dropdown-basic-button {
    border: none;
    background-color: #fff;
    margin: 40px;
    font-size: 100%;
    vertical-align: baseline;
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
  }
  &#dropdown:hover {
    background-color: blue;
  }
`;
export default Header;
