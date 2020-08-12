import React from "react";
import styled from "styled-components";

const CheckoutItem = ({ item }) => {
  const numPrice = parseFloat(item.price.replace("$", ""));
  const totalPrice = (numPrice * item.quantity).toFixed(2);
  return (
    <Wrapper>
      <ItemDetails>
        <Iteminfo>
          <div>{item.name}</div>
          <div>qty:{item.quantity}</div>
          <div>price:{item.price}</div>
        </Iteminfo>
        <ItemImage>
          <img alt={item.name} src={item.imageSrc} />
          <div>total:${totalPrice}</div>
        </ItemImage>
      </ItemDetails>
    </Wrapper>
  );
};

const ItemDetails = styled.div`
  display: flex;
`;
const ItemImage = styled.div`
  margin-left: 30vw;
  margin-right: 10px;
  margin-bottom: 4px;
`;
const Iteminfo = styled.div``;
const Wrapper = styled.div`
  border: 2px black solid;
  margin-bottom: 10px;
`;

export default CheckoutItem;
