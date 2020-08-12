import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory, Link } from "react-router-dom";

import Dropdown from "./Dropdown";

import styled from "styled-components";
import { GrCart } from "react-icons/gr";

import { AuthContext } from './AuthContext';

const Header = () => {
  const categories = useSelector((state) => state.items.categories);
  const history = useHistory();

  const {
    appUser,
    handleSignOut,
  } = useContext(AuthContext);

  const navigateTocategory = category => {
    history.push(`/products/${category.toLowerCase()}`);
  };

  const handleLoginAction = () => {
    if (appUser.email) {
      handleSignOut();
    }
    else {
      history.push('/login');
    }
  }

  return (
    <>
      <TopItems>
        <Logo>ESHOP</Logo>
        <button onClick={handleLoginAction}>
          {appUser.email ? 'Sign Out' :  'Sign In'}
        </button>
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
        </NavLink>
      </Navbar>
    </>
  );
};

const TopItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
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

export default Header;
