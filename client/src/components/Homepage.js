import React from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Wrapper>
      <Banner src="../assets/fitness.jpg" />
      <Text>Fitness</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Banner = styled.img`
  height: 500px;
  width: 120vw;
  object-fit: cover;
  overflow: hidden;
`;
const Text = styled.p`
  position: relative;
  bottom: 300px;
  color: white;
  font-size: x-large;
`;
export default Homepage;
