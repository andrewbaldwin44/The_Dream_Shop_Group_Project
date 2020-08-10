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
<<<<<<< HEAD
  const items = useSelector((state) => state.items.items);
  const categoryId = useParams().categoryId;
  React.useEffect(() => {
    dispatch(requestItems());
    fetch(`/products/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => data.productsData)
      .then((items) => dispatch(receiveItems(items)))
      .catch((err) => dispatch(receiveItemsError()));
    // eslint-disable-next-line
=======
  const categoryData = useSelector((state) => state.category.category);
  const categoryId = useParams().categoryId;

  React.useEffect(() => {
    dispatch(requestCategory());

    fetch(`/products/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => data.category)
      .then((category) => dispatch(receiveCategory(category)))
      .catch((err) => dispatch(receiveCategoryError()));
>>>>>>> 22dfd473928acc39ac7b36ff8ae6c1713168b7da
  }, []);

  return (
    <Wrapper>
<<<<<<< HEAD
      {items === null ? (
        <div>loading...</div>
      ) : (
        <>
          {items.map((item) => {
            return <StoreItem item={item} key={item.id} />;
=======
      {categoryData === null ? (
        <div>loading...</div>
      ) : (
        <>
          {categoryData.map((data) => {
            return <StoreItem item={data} key={data.id} />;
>>>>>>> 22dfd473928acc39ac7b36ff8ae6c1713168b7da
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
