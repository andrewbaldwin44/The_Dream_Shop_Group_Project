import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import CartFooter from "./CartFooter";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const history = useHistory();
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      <CartWrapper>
        <CartHeader />
        {cart.map((item, index) => {
          return <CartItem item={item} index={index} key={item.id} />;
        })}
        <CartFooter />
        <Button onClick={() => history.push("/checkout")}>CHECKOUT</Button>
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

const Button = styled.button`
  border: none;
  color: white;
  background-color: #47d688;
  border-radius: 15px;
  width: 200px;
  height: 40px;
  margin-left: 80%;
  margin-top: 20px;
  font-size: larger;
  font-weight: bold;
  &&:hover {
    background-color: white;
    color: #47d688;
    border: 2px solid #47d688;
    cursor: pointer;
  }
`;
export default Cart;
