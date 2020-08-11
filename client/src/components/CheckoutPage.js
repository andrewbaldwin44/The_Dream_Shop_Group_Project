import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import CheckoutForm from "./CheckoutForm";

const CheckoutPage = () => {
  const cartData = useSelector((state) => state.cart.cart);
  let total = 0;
  cartData.map((item) => (
    total += parseFloat(item.price.replace("$", "")) * item.quantity
  ));
  return (
    <Wrapper>
      <Back>Return to Cart:</Back>
      <div>Your Current Order:</div>
      <ItemsBox>
        {cartData.map((data) => (
          <CheckoutItem item={data} key={data.id} />
        ))}
        <div>TOTAL : ${total}</div>
      </ItemsBox>
      <CheckoutForm></CheckoutForm>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ItemsBox = styled.div`
  border: 2px yellow solid;
  width: 70vw;
  padding: 10px;
`;

const Back = styled.div`
  font-size: large;
  margin-bottom: 5vh;
`;
const Text = styled.p`
  position: relative;
  bottom: 300px;
  color: white;
  font-size: x-large;
`;
export default CheckoutPage;
