import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import light from "../assets/light.jpeg";
const Homepage = () => {
  return (
    <Wrapper>
      <Banner src={light} />
      <Text>
        Welcome to Dreamshop. Your place to experience dreams. Browse our
        products to fulfill all your dreams
      </Text>
      <Shoplink to="/brands">Shop now</Shoplink>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Banner = styled.img`
  height: 300px;
  width: 50vw;
  border-radius: 5px;
  object-fit: cover;
  overflow: hidden;
`;
const Text = styled.p`
  position: relative;
  bottom: 400px;
  left: 30px;
  color: white;
  text-align: center;
  font-size: 20px;
  font-style: italic;
  width: 30vw;
`;
const Shoplink = styled(Link)`
  border: 1 px solid black;
  bottom: 320px;
`;
export default Homepage;
