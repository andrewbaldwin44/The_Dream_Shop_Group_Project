import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StoreItem from "./StoreItem";

const ProductPage = () => {
  let productNumber = useParams().id;
  let items = useSelector((state) => {
    console.log(state);
    return state.items.items;
  });
  let dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(requestItems());
    fetch(`/products/products/${productNumber}`)
      .then((res) => res.json())
      .then((data) => data.productsData)
      .then((items) => dispatch(receiveItems(items)))
      .catch((err) => dispatch(receiveItemsError()));
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <ProductData>
        <Info>
          <div>{productNumber} / name</div>
          <ProductInfo>
            <div>category</div>
            <div>brand</div>
          </ProductInfo>
        </Info>
        <Picture>
          <div>image</div>
          <div>price</div>
          <div>Qty</div>
          <input type="text"></input>
          <button>add to cart</button>
        </Picture>
      </ProductData>
      <div>
        <p>Lorem ipsum.....</p>
      </div>
    </Wrapper>
  );
};
const ProductData = styled.div`
  display: flex;
`;

const Picture = styled.div`
  margin-left: 65vw;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Info = styled.div`
  border: 2px solid black;
`;
const ProductInfo = styled.div`
  display: flex;
`;
export default ProductPage;
