import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      <CartWrapper>
        <CartHeader />
        <CartItem item={5} />
      </CartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
  h2 {
    width: 100%;
    margin: 20px 0;
    font-size: 2em;
    text-align: center;
    font-weight: bold;
  }
`;

const CartWrapper = styled.div`
  width: 1100px;
  margin: auto;
`;
export default Cart;
