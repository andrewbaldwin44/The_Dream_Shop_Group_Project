import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  requestCategory,
  receiveCategory,
  receiveCategoryError,
} from "../actions";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreItem from "./StoreItem";
import Sidebar from "./Sidebar";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category.category);
  const categoryId = useParams().categoryId;
  React.useEffect(() => {
    dispatch(requestCategory());

    fetch(`/products/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => data.category)
      .then((category) => dispatch(receiveCategory(category)))
      .catch((err) => dispatch(receiveCategoryError()));
  }, []);
  return (
    <Div>
      <Sidebar />
      <Wrapper>
        {categoryData === null ? (
          <div>loading...</div>
        ) : (
          <>
            {categoryData.map((data) => {
              return <StoreItem item={data} key={data.id} />;
            })}
          </>
        )}
      </Wrapper>
    </Div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Div = styled.div`
  display: flex;
`;

export default CategoryPage;
