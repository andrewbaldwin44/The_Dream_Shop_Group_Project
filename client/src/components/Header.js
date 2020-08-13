import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory, Link } from "react-router-dom";

import Dropdown from "./Dropdown";

import styled from "styled-components";
import { GrCart } from "react-icons/gr";

import { AuthContext } from "./AuthContext";

const Header = () => {
  const categories = useSelector((state) => state.items.categories);
  const history = useHistory();
  const cart = useSelector((state) => state.cart.cart);
  const { appUser, handleSignOut } = useContext(AuthContext);

  const navigateTocategory = (category) => {
    history.push(`/products/${category.toLowerCase()}`);
  };
  console.log(cart);
  const reducer = (total, item) => total + item.quantity;
  const totalQuantity = cart.reduce(reducer, 0);
  const handleLoginAction = () => {
    if (appUser.email) {
      handleSignOut();
      history.push("/");
    } else {
      history.push("/login");
    }
  };
  return (
    <>
      <TopItems>
        <Logo>ESHOP</Logo>
        <StyledButton onClick={handleLoginAction}>
          {appUser.email ? "Sign Out" : "Sign In"}
        </StyledButton>
      </TopItems>
      <Navbar>
        <RightNavigation>
          <NavLink exact to="/">
            Home
          </NavLink>
          <Dropdown
            items={categories}
            clickCallback={navigateTocategory}
            id={"category"}
          />
        </RightNavigation>
        <NavLink exact to="/cart">
          <CartIcon />
          <Cartquantity>{totalQuantity}</Cartquantity>
        </NavLink>
      </Navbar>
    </>
  );
};

const TopItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 95px;
`;

const StyledButton = styled.button`
  width: 110px;
  height: 40px;
  transition: 0.2s ease;
  font-size: 1.1em;

  &:hover {
    color: #4285f4;
  }
`;

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
const Cartquantity = styled.span`
  background-color: #ffd700;
  color: #fff;
  border-radius: 100px;
  padding: 4px;
`;

export default Header;
