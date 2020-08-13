import React from "react";
import styled from "styled-components";

const CheckoutItem = ({ item }) => {
  const numPrice = parseFloat(item.price.replace("$", ""));
  const totalPrice = (numPrice * item.quantity).toFixed(2);
  return (
    <Wrapper>
      <ItemImage>
        <img alt={item.name} src={item.imageSrc} />
      </ItemImage>
      <Iteminfo>
        <h4>{item.name}</h4>
        <div>
          {item.quantity} x {item.price}
        </div>
        <div>Total: ${totalPrice}</div>
      </Iteminfo>
    </Wrapper>
  );
};

const ItemImage = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
const Iteminfo = styled.div`
  margin-left: 20px;
  h4 {
    font-weight: bold;
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 10px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 25px;
  display: flex;
  border-bottom: 3px #eee solid;
`;

export default CheckoutItem;
