import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  requestCategory,
  receiveCategory,
  receiveCategoryError,
} from "../actions";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreItem from "./StoreItem";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category.category);
  const categoryId = useParams().categoryId;

  React.useEffect(() => {
    dispatch(requestCategory());

    fetch(`/products/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => data.productsData)
      .then((items) => dispatch(receiveItems(items)))
      .catch((err) => dispatch(receiveItemsError()));
    // eslint-disable-next-line
    return () => dispatch(resetItems());
  }, []);
  return (
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
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default CategoryPage;
