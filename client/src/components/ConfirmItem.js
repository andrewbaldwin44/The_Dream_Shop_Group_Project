import React from "react";
import styled from "styled-components";

const ConfirmItem = (item) => {
  const orderItem = item.data.itemDetails;

  return (
    <Wrapper>
      <Item>
        <img src={orderItem.imageSrc} alt={orderItem.name} />
        <Info>
          <h4>{orderItem.name}</h4>
          <p>
            {orderItem.quantity} x <span>{orderItem.price}</span>
          </p>
        </Info>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  height: 120px;
  display: flex;
  margin-bottom: 5px;
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
  border: 2px solid #eee;
  display: flex;
  padding: 12px;
  position: relative;
  img {
    object-fit: contain;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  h4 {
    font-weight: bold;
    font-size: large;
  }
  p {
    font-size: 1.1em;
    span {
      color: green;
    }
  }
`;

export default ConfirmItem;
