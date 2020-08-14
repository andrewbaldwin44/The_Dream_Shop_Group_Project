import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ConfirmItem = (item) => {
  console.log(item.data);

  const confirmationData = useSelector((state) => state.order.order);
  const itemsArray = confirmationData.itemsPurchased;
  console.log("************ITEMPAGE", confirmationData.itemsPurchased);

  let total = 0;
  itemsArray.map(
    (item) =>
      (total +=
        parseFloat(item.itemDetails.price.replace("$", "")) *
        item.itemDetails.quantity)
  );
  console.log("total", total);

  const rounded = total.toFixed(2);
  let itemGeneration =
    confirmationData === undefined || null ? (
      <div>There's nothing in your cart!</div>
    ) : (
      itemsArray.map((item) => {
        console.log(
          item.itemDetails.name,
          item.itemDetails.quantity,
          "this guy is what we need"
        );
        return (
          <Iteminfo>
            <ItemName>{item.itemDetails.name}</ItemName>
            <ItemSpent>
              {" "}
              {item.itemDetails.quantity} @ {item.itemDetails.price}
            </ItemSpent>
            <ItemPic>
              <img
                src={item.itemDetails.imageSrc}
                alt={item.itemDetails.name}
              />
            </ItemPic>
          </Iteminfo>
        );
      })
    );

  return (
    <Wrapper>
      <ItemDetails>
        <div>{itemGeneration}</div>
      </ItemDetails>
      <Cost>Total cost = ${rounded}</Cost>
    </Wrapper>
  );
};

const ItemDetails = styled.div`
  display: flex;
`;

const Cost = styled.div`
  margin-left: 5vw;
`;
const ItemName = styled.div`
  justify-items: inline block;
`;
const ItemSpent = styled.div`
  margin-left: 3px;
  border-left: 1px dashed lightgray;
  border-right: 1px dashed lightgray;
`;
const Iteminfo = styled.div`
  border: black 1px solid;
  margin-left: 5vw;
  margin-right: 15vw;
  display: flex;
`;

const ItemPic = styled.div`
  margin-left: max;
`;

const Wrapper = styled.div`
  margin-top: 10px;
  margin-left: 20vw;
  margin-bottom: 20px;
`;

export default ConfirmItem;
