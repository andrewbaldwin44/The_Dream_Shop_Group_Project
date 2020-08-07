import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//import StoreItem from "./StoreItem";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  console.log(items);
  React.useEffect(() => {
    dispatch(requestItems());
    fetch()
      .then((res) => res.json())
      .then((items) => dispatch(receiveItems(items)))
      .catch((err) => dispatch(receiveItemsError()));
    // eslint-disable-next-line
  }, []);
  return (
    <div>{items === null ? <div>loading...</div> : <div>loaded</div>}</div>
  );
};

export default CategoryPage;
