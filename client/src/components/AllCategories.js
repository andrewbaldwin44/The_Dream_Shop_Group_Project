import React from "react";

import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import styled from "styled-components";
//hardcoded each category so i can give them seperate background images
const AllCategories = () => {
  const categoryData = useSelector((state) => state.items.categories);
  return (
    <>
      {categoryData === null ? (
        <div>loading...</div>
      ) : (
        <>
          <Wrapper>
            <Categorylink to={`/products/${categoryData[0]}`}>
              <Banner
                style={{ backgroundImage: "url('../assets/fitness.jpg')" }}
              >
                {categoryData[0]}
              </Banner>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[1]}`}>
              <Banner
                style={{ backgroundImage: "url('../assets/health.jpg')" }}
              >
                {categoryData[1]}
              </Banner>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[2]}`}>
              <Banner
                style={{
                  backgroundImage: "url('../assets/lifestyle.jpg')",
                }}
              >
                {categoryData[2]}
              </Banner>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[3]}`}>
              <Banner
                style={{
                  backgroundImage: "url('../assets/entertainment.jpg')",
                }}
              >
                {categoryData[3]}
              </Banner>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[4]}`}>
              <Banner
                style={{ backgroundImage: "url('../assets/industrial.jpg')" }}
              >
                {categoryData[4]}
              </Banner>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[5]}`}>
              <Banner style={{ backgroundImage: "url('../assets/pets.jpg')" }}>
                {categoryData[5]}
              </Banner>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[6]}`}>
              <Banner
                style={{ backgroundImage: "url('../../assets/games.png')" }}
              >
                {categoryData[6]}
              </Banner>
            </Categorylink>
          </Wrapper>
        </>
      )}
    </>
  );
};

const Banner = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 1px 1px 1px 1px black;
  width: 100vw;
  margin-top: 20px;
  margin-bottom: 20px;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  &:hover {
    opacity: 0.3;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Categorylink = styled(NavLink)`
  color: #fff;
  font-size: 25px;
  text-shadow: 1px 1px black;
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export default AllCategories;
