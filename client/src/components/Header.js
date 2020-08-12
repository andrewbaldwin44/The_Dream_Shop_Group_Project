import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import Dropdown from "./Dropdown" ;

import styled from "styled-components";
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
<<<<<<< HEAD
        <NavLink style={{ marginLeft: "300px" }} exact to="/">
          Home
        </NavLink>
        <DropdownButton id="dropdown-basic-button" title="Categories">
          {categories.map((data) => {
            return (
              <Dropelements>
                <Dropdown.Item to={`/products/${data.toLowerCase()}`}>
                  {data}
                </Dropdown.Item>
              </Dropelements>
            );
          })}
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Brands">
          {brands.map((data) => {
            return (
              <Dropelements>
                <Dropdown.Item href={`/products/${data.name.toLowerCase()}`}>
                  {data.name}
                </Dropdown.Item>
              </Dropelements>
            );
          })}
        </DropdownButton>
=======
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
>>>>>>> 10b48be10049815c432a77519781408d262dfed8
        <NavLink exact to="/cart">
          <CartIcon />
        </NavLink>
      </Navbar>
    </>
  );
};

<<<<<<< HEAD
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
=======
>>>>>>> 10b48be10049815c432a77519781408d262dfed8
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
