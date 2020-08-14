import React, { useEffect, useState } from "react";

import Beach from "../assets/beach.jpg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCategory,
  receiveCategory,
  receiveCategoryError,
} from "../actions";
import StoreItem from "./StoreItem";

const Homepage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.category.category);
  useEffect(() => {
    dispatch(requestCategory());

    fetch(`/hotproducts`)
      .then((res) => res.json())
      .then((data) => data.top50Products)
      .then((category) => dispatch(receiveCategory(category)))
      .catch((err) => dispatch(receiveCategoryError()));
  }, []);

  return (
    <Wrapper>
      <Text>
        Welcome to Dreamshop. Your place to experience dreams. Browse our
        products to fulfill all your dreams
      </Text>
      <Shoplink to="/categories">Shop now</Shoplink>
      <ItemWrapper>
        {items !== null &&
          items.map((item) => {
            return <StoreItem item={item} key={item.id} />;
          })}
      </ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  height: 900px;
  width: 100%;
  background-image: url(${Beach});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &&::-webkit-scrollbar {
    display: none;
  }
  a {
    background: white;
  }
`;
const Text = styled.p`
  color: #fff;
  font-size: 30px;
  font-style: italic;
  text-shadow: 1px 1px black;
  margin: 100px;
  width: 30vw;
`;
const Shoplink = styled(NavLink)`
  color: #1e90ff;
  border-radius: 10px;
  border: 1px solid #1e90ff;
  padding: 12px 18px;
  font-weight: bold;
  font-size: x-large;
  background-color: #f0ffff;
  margin: 20px 0 80px 0;
`;
export default Homepage;
