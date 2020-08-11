import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { cartAddItem, cartItemAdded, cartAddItemError } from "../actions";
import { GrCart } from "react-icons/gr";

const CheckoutItem = ({ item }) => {
  console.log(item);
  const numPrice = parseFloat(item.price.replace("$", ""));
  const totalPrice = numPrice * item.quantity;
  console.log(totalPrice);
  return (
    <Wrapper>
      <div>{item.name}</div>
      <div>qty:{item.quantity}</div>
      <div>price:{item.price}</div>
      <div>total:${totalPrice}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px black solid;
  margin-bottom: 4px;
`;
const Price = styled.p`
  font-weight: bold;
  font-size: large;
  color: black;
`;

const Image = styled.img`
  height: 180px;

  align-self: center;
`;

const Name = styled.p`
  margin: 10px 0;
  color: #5f6368;
`;

export default CheckoutItem;
