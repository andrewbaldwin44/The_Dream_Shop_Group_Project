import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ConfirmItem = (item) => {
  console.log(item.data);
  let productNumber = item.data.productId;
  let prodductQty = item.data.quantity;
  const confirmationData = useSelector((state) => state.order.order);
  console.log("************ITEMPAGE", confirmationData);

  return (
    <Wrapper>
      <ItemDetails>
        <div>item</div>
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

export default ConfirmItem;
