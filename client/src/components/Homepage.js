import React from "react";
import Beach from "../assets/Beach.jpg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Homepage = () => {
  return (
    <Wrapper>
      <Text>
        Welcome to Dreamshop. Your place to experience dreams. Browse our
        products to fulfill all your dreams
      </Text>
      <Shoplink to="/categories">Shop now</Shoplink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 100%;
  background-image: url(${Beach});
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  color: #fff;
  position: absolute;
  font-size: 30px;
  font-style: italic;
  text-shadow: 1px 1px black;

  width: 30vw;
`;
const Shoplink = styled(NavLink)`
  color: #1e90ff;
  border-radius: 10px;
  margin-top: 250px;
  border: 1px solid #1e90ff;
  padding: 5px;
  height: 40px;
  font-size: 20px;
  background-color: #f0ffff;
`;
export default Homepage;
