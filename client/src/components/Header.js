import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory, Link } from "react-router-dom";

import Dropdown from "./Dropdown";

import styled from "styled-components";
import { GrCart } from "react-icons/gr";

import { AuthContext } from "./AuthContext";

import Cloud from "../assets/cloud.png";

import ScaleIn from "./ScaleIn";

const Header = () => {
  const categories = useSelector((state) => state.items.categories);
  const history = useHistory();
  const cart = useSelector((state) => state.cart.cart);
  const { appUser, handleSignOut } = useContext(AuthContext);

  const navigateTocategory = (category) => {
    history.push(`/products/${category.toLowerCase()}`);
  };

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
      <Logo>
        <BlueText>Dream</BlueText>
        <h2>Shop</h2>
        <LogoImage src={Cloud} />
      </Logo>
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
        <LeftNavigation>
          <NavLink exact to="/cart" style={{ position: "relative" }}>
            <CartIcon />
            {cart.length > 0 && (
              <ScaleIn>
                <Cartquantity>{totalQuantity}</Cartquantity>
              </ScaleIn>
            )}
          </NavLink>
          <StyledButton onClick={handleLoginAction}>
            {appUser.email ? "Sign Out" : "Sign In"}
          </StyledButton>
        </LeftNavigation>
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
  font-size: 1.3em;
  padding-right: 130px;
  padding-left: 300px;
`;

const RightNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
`;

const LeftNavigation = styled.div`
  display: flex;
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

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.3em;
  font-family: inherit;
  font-weight: bold;
  margin: 20px 0;

  h1,
  h2 {
    margin-top: 20px;
  }
`;

const BlueText = styled.h1`
  color: #00a3e3;
  margin-right: 15px;
  margin-left: 30px;
`;

const LogoImage = styled.img`
  margin-left: -100px;
  height: 110px;
  width: auto;
`;

const CartIcon = styled(GrCart)`
  font-size: 40px;
`;
const Cartquantity = styled.span`
  background-color: #f03026;
  z-index: 10;
  color: #fff;
  border-radius: 100px;
  padding: 2px 7px;
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: small;
`;

export default Header;
