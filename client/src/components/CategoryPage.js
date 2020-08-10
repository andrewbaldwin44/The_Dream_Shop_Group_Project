import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  requestCategory,
  receiveCategory,
  receiveCategoryError,
} from "../actions";
<<<<<<< HEAD

=======
import { Link } from "react-router-dom";
>>>>>>> some changes
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
      .then((data) => data.category)
      .then((category) => dispatch(receiveCategory(category)))
      .catch((err) => dispatch(receiveCategoryError()));
  }, []);
<<<<<<< HEAD
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

=======
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
>>>>>>> some changes
export default CategoryPage;
