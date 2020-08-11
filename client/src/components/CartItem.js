import React from "react";
import styled from "styled-components";

const CartItem = ({ item }) => {
  return (
    <Wrapper>
      <Item></Item>
      <Quantity></Quantity>
      <Price></Price>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1100px;
  height: 150px;
  /* background-color: #eee; */
  display: flex;
  p {
    display: inline-block;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 0.9em;
  }
`;
const Item = styled.div`
  width: 700px;
  height: auto;
  border: 1px solid #eee;
`;
const Quantity = styled.div`
  width: 250px;
  height: auto;
  border: 1px solid #eee;
`;
const Price = styled.div`
  width: 150px;
  height: auto;
  border: 1px solid #eee;
`;

export default CartItem;
