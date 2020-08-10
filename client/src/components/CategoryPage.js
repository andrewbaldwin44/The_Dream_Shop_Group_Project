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
//import StoreItem from "./StoreItem";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  React.useEffect(() => {
    dispatch(requestItems());
    fetch("/products/categories")
      .then((res) => res.json())
      .then((data) => dispatch(receiveItems(data.categories)))
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
          console.log(item);
          return <Categorylink>{item}</Categorylink>;
        })}
      </div>
    );
  }
};
const Categorylink = styled(Link)`
  display: flex;
  justify-content: space-between;
`;
export default CategoryPage;
