import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestItems,
  receiveItems,
  receiveItemsError,
  resetItems,
} from "../actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//import StoreItem from "./StoreItem";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  React.useEffect(() => {
    dispatch(requestItems());
    fetch("/brands")
      .then((res) => res.json())
      .then((data) => dispatch(receiveItems(data.brands)))
      .catch((err) => dispatch(receiveItemsError()));
    // eslint-disable-next-line
    return () => dispatch(resetItems());
  }, []);
  if (items === null) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        {items.map((item) => {
          return item.name;
        })}
      </div>
    );
  }
};

export default CategoryPage;
