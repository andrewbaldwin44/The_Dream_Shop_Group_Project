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
  width: 100vw;
  object-fit: cover;
  overflow: hidden;
`;
const Text = styled.p`
  position: relative;
  bottom: 400px;
  left: 30px;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
export default Homepage;
