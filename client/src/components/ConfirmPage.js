import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import ConfirmItem from "./ConfirmItem.js";

const ConfirmPage = () => {
  const initialize = useSelector((state) => state.order.order);

  // const confirmationData = useSelector(
  //   (state) => state.order.order.itemsPurchased
  // );
  if (!initialize) {
    return <div>There's nothing in your cart!</div>;
  } else {
    const { itemsPurchased } = initialize;
    return (
      <>
        <div>Your Order: {initialize.orderNo}</div>
        <ConfirmItem data={itemsPurchased} />
        <div> Thank you for your business! </div>
      </>
    );
  }
};

export default ConfirmPage;
