import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts, receiveProducts, receiveProductsError } from "../actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreItem from "./StoreItem";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.products);
  const categoryId = useParams().categoryId;

  React.useEffect(() => {
    dispatch(requestProducts());
    fetch(`/products/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => data.productsData)
      .then((items) => dispatch(receiveProducts(items)))
      .catch((err) => dispatch(receiveProductsError()));
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {items === null ? (
        <div>loading...</div>
      ) : (
        <>
          {items.map((item) => {
            return <StoreItem item={item} key={item.id} />;
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
