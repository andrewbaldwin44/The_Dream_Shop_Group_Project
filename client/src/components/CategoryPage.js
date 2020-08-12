import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  requestCategory,
  receiveCategory,
  receiveCategoryError,
} from "../actions";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreItem from "./StoreItem";
import Sidebar from "./Sidebar";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category.category);
  const categoryId = useParams().categoryId;

  const [bodyLocationFilters, setBodyLocationFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(categoryData);

  useEffect(() => {
    dispatch(requestCategory());

    fetch(`/products/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => data.category)
      .then((category) => dispatch(receiveCategory(category)))
      .catch((err) => dispatch(receiveCategoryError()));
  }, [categoryId]);

  useEffect(() => {
    if (categoryData) {
      if (bodyLocationFilters.length > 0 || brandFilters > 0) {
        const newFilteredCategories =
          categoryData.filter(data => (
            bodyLocationFilters.includes(data.body_location) &&
            brandFilters.includes(String(data.companyId))
          ));

        setFilteredCategories(newFilteredCategories);
      }
      else {
        setFilteredCategories(categoryData);
      }
    }
  }, [bodyLocationFilters, brandFilters, categoryData]);

  return (
    <Div>
      <Sidebar
        bodyLocationFilters={bodyLocationFilters}
        setBodyLocationFilters={setBodyLocationFilters}
        brandFilters={brandFilters}
        setBrandFilters={setBrandFilters}
      />
      <Wrapper>
        {filteredCategories == null ? (
          <div>loading...</div>
        ) : (
          <>
            {filteredCategories.map((category) => {
              return <StoreItem item={category} key={category.id} />;
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
