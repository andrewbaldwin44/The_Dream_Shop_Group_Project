import React from "react";

import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import fitness from "../assets/fitness.jpg";
import styled from "styled-components";

const AllCategories = () => {
  const categoryData = useSelector((state) => state.items.categories);
  return (
    <>
      <Wrapper>
        {categoryData === null ? (
          <div>loading...</div>
        ) : (
          <>
            <Catdiv>
              {categoryData.map((categories) => {
                return (
                  <>
                    <Categorylink to={`/products/${categories}`}>
                      {categories}
                    </Categorylink>
                  </>
                );
              })}
              <Fitness src={fitness} />
            </Catdiv>
          </>
        )}
      </Wrapper>
    </>
  );
};
const Fitness = styled.img`
  width: 50px;
  height: 50px;
`;
const Catdiv = styled.div`
  margin: 40 px;
`;
const Categorylink = styled(NavLink)`
  color: blue;
  border: 0.5px solid black;
  margin: 30px;
  margin-top: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default AllCategories;
