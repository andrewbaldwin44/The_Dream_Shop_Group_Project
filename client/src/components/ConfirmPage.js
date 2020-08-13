import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import CheckoutForm from "./CheckoutForm";
import ConfirmItem from "./ConfirmItem.js";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";

const ConfirmPage = () => {
  const confirmationData = useSelector(
    (state) => state.order.order.itemsPurchased
  );
  console.log(confirmationData);
  const confirmationNumber = useSelector((state) => state.order.order.orderNo);

  let itemGeneration =
    confirmationData === undefined || null
      ? null
      : confirmationData.map((item) => <ConfirmItem data={item} />);

  return (
    <div>
      <div>Thank you for your order!</div>
      <div>Confirmation number: {confirmationNumber}</div>
      <div>{itemGeneration}</div>{" "}
    </div>
  );
};

export default ConfirmPage;
