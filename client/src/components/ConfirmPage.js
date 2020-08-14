import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ConfirmItem from "./ConfirmItem.js";

const ConfirmPage = () => {
  const confirmationData = useSelector(
    (state) => state.order.order
  );

  if (confirmationData) {
    const { orderNo: confirmationNumber, itemsPurchased } = confirmationData;

    return (
      <Wrapper>
        <Header>Thank you for your order!</Header>
        <SubHead>Confirmation number: {confirmationNumber}</SubHead>
        <SubHead>These items will be arriving soon:</SubHead>
        <div>
          {itemsPurchased.map((item, index) => (
            <ConfirmItem data={item} key={index} />
          ))}
        </div>{" "}
        <SubHead>May all your dreams come true...</SubHead>
      </Wrapper>
    );
  }
  else {
    return (
      <Redirect from='/confirmation' to="/" />
    )
  }


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
