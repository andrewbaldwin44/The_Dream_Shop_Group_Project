import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";

const CheckoutPage = () => {
  const cartData = useSelector((state) => state.cart.cart);
  let total = 0;
  cartData.map((item) => {
    total += parseFloat(item.price.replace("$", "")) * item.quantity;
  });
  return (
    <Wrapper>
      <div>Your Cart:</div>
      <ItemsBox>
        {cartData.map((data) => (
          <CheckoutItem item={data} key={data.id} />
        ))}
        <div>TOTAL : ${total}</div>
      </ItemsBox>

      <div>Form Goes Here</div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ItemsBox = styled.div`
  border: 2px yellow solid;
  width: 70vw;
  padding: 10px;
`;
const Text = styled.p`
  position: relative;
  bottom: 300px;
  color: white;
  font-size: x-large;
`;
export default CheckoutPage;
