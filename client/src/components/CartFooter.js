import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CartFooter = () => {
  let total = 0;
  const cart = useSelector((state) => state.cart.cart);
  cart.forEach((obj) => {
    total =
      total + Number(obj.price.substring(1, obj.price.length)) * obj.quantity;
  });
  return (
    <Wrapper>
      <p style={{ marginLeft: "25px" }}></p>
      <p style={{ marginLeft: "870px", fontWeight: "bold" }}>Total:</p>
      <p style={{ marginLeft: "70px", fontSize: "1.1em" }}>$ {total}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1100px;
  height: 45px;
  border: 0.5px solid #eee;
  display: flex;
  p {
    display: inline-block;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 0.9em;
  }
`;

export default CartFooter;
