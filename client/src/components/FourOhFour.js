import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Clouds from '../assets/cloudsbackground.jpeg';

const mouseX = '500';

function FourOhFour() {
  const handleMouseMove = event => {
    const cloudImage = event.target;

    const widthOffset = cloudImage.offsetWidth;
    const heightOffset =  cloudImage.offsetHeight;

    cloudImage.style.backgroundPositionX = event.clientX * 100 / widthOffset + "%";
    cloudImage.style.backgroundPositionY = event.clientY * 100 / heightOffset + '%';
  }

  return (
    <Wrapper>
      <h3>Lost in the Clouds!</h3>
      <Link to='/'>Click to go Home</Link>
      <Cloud
        onMouseMove={handleMouseMove}
      >
      </Cloud>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  h3, a {
    position: absolute;
    font-weight: bold;
    color: white;
    text-shadow: 4px 4px 10px black;
    z-index: 100;
  }

  h3 {
    margin-top: 10%;
    font-size: 3em;
  }

  a {
    margin-top: 20%;
    font-size: 2.5em;
    transition: all 0.5s ease;
  }

  & a:hover {
    transform: scale(1.05);
    text-shadow: 3px 3px 15px dodgerblue;
  }
`;

const Cloud = styled.div`
  background-image: url(${Clouds});
  height: 100vh;
  width: 150%;
  background-size: auto 150%;
  background-repeat: no-repeat;
  background-position: 0 -40px;
  transform: scale(1);
  transition: background-position 0.25s;
`;

export default FourOhFour;
