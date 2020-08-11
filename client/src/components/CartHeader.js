import React from "react";
import styled from "styled-components";

const CartHeader = () => {
  return (
    <Wrapper>
      <p style={{ marginLeft: "25px" }}>Item</p>
      <p style={{ marginLeft: "745px" }}>Quantity</p>
      <p style={{ marginLeft: "145px" }}>Price</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1100px;
  height: 45px;
  background-color: #eee;
  display: flex;
  p {
    display: inline-block;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 0.9em;
  }
`;

export default CartHeader;
