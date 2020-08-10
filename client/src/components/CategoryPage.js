import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestItems,
  receiveItems,
  receiveItemsError,
  resetItems,
} from "../actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreItem from "./StoreItem";

const CategoryPage = () => {
  const dispatch = useDispatch();
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
    return () => dispatch(resetItems());
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
