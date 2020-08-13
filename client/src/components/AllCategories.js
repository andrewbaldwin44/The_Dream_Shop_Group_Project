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
          <Title>Select a category you wish to see products of:</Title>
          <Wrapper>
            <Categorylink to={`/products/${categoryData[0]}`}>
              <Fitness>{categoryData[0]}</Fitness>
            </Categorylink>

            <Categorylink to={`/products/${categoryData[1]}`}>
              <Medical> {categoryData[1]}</Medical>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[2]}`}>
              <Lifestyle>{categoryData[2]}</Lifestyle>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[3]}`}>
              <Entertainment>{categoryData[3]}</Entertainment>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[4]}`}>
              <Industrial>{categoryData[4]}</Industrial>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[5]}`}>
              <Pets>{categoryData[5]}</Pets>
            </Categorylink>
            <Categorylink to={`/products/${categoryData[6]}`}>
              <Gaming>{categoryData[6]}</Gaming>
            </Categorylink>
          </Wrapper>
        </>
      )}
    </>
  );
};
const Title = styled.h3`
  color: black;
  margin-bottom: 30px;
  font-weight: bold;
`;
const Fitness = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("../assets/fitness.jpg");
  background-size: cover;
  &:hover {
    opacity: 0.25;
  }
`;
const Medical = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("../assets/health.jpg");
  background-size: cover;
  &:hover {
    opacity: 0.25;
  }
`;
const Lifestyle = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("../assets/lifestyle.jpg");
  background-size: cover;
  &:hover {
    opacity: 0.25;
  }
`;
const Entertainment = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("../assets/entertainment.jpg");
  background-size: cover;
  &:hover {
    opacity: 0.25;
  }
`;
const Industrial = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("../assets/industrial.jpg");
  background-size: cover;
  &:hover {
    opacity: 0.25;
  }
`;
const Pets = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("../assets/pets.jpg");
  background-size: cover;
  &:hover {
    opacity: 0.25;
  }
`;
const Gaming = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("../assets/gaming.jpg");
  background-size: cover;
  &:hover {
    opacity: 0.25;
  }
`;
const Categorylink = styled(NavLink)`
  color: #fff;
  text-shadow: 1px 1px black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;

export default AllCategories;
