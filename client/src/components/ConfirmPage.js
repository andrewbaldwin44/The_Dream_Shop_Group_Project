import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ConfirmItem from "./ConfirmItem.js";

const ConfirmPage = () => {
  const confirmationData = useSelector(
    (state) => state.order.order.itemsPurchased
  );
  const confirmationNumber = useSelector((state) => state.order.order.orderNo);

  let itemGeneration =
    confirmationData === undefined || null
      ? null
      : confirmationData.map((item, index) => (
          <ConfirmItem data={item} key={index} />
        ));

  return (
    <Wrapper>
      <Header>Thank you for your order!</Header>
      <SubHead>Confirmation number: {confirmationNumber}</SubHead>
      <SubHead>These items will be arriving soon:</SubHead>
      <div>{itemGeneration}</div>{" "}
      <SubHead>May all your dreams come true...</SubHead>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  margin: 30px;
  font-size: x-large;
  font-weight: bold;
`;
const SubHead = styled.div`
  margin-bottom: 20px;
  font-size: large;
  font-weight: bold;
  &&:last-of-type {
    margin-top: 15px;
  }
`;

export default ConfirmPage;
