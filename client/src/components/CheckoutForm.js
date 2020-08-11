import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { cartAddItem, cartItemAdded, cartAddItemError } from "../actions";

const CheckoutForm = () => {
  return (
    <Wrapper>
      <OrderInfo>
        <ShippingInfo>
          <SectionHeader>Shipping Information:</SectionHeader>
          <div>
            <label id="text">Name</label>
            <input type="text" id="fullname" placeholder="Name"></input>
          </div>
          <div>
            <label id="text">Address</label>
            <input type="address" id="address" placeholder="Address"></input>
            <label id="text">City</label>
            <input type="text" id="city" placeholder="ville"></input>
          </div>
          <div>
            <label id="text">Province</label>
            <input type="text" id="PostCode" placeholder="Province"></input>
            <label id="text">Postal Code</label>
            <input type="text" id="PostCode" placeholder="Postal Code"></input>
          </div>
        </ShippingInfo>
        <BillingInfo>
          {" "}
          <SectionHeader>Billing Information:</SectionHeader>
          <div>
            <label id="text">Name</label>
            <input type="text" id="fullname" placeholder="Name"></input>
          </div>
          <div>
            <label id="text">Address</label>
            <input type="address" id="address" placeholder="Address"></input>
            <label id="text">City</label>
            <input type="text" id="city" placeholder="ville"></input>
          </div>
          <div>
            <label id="text">Province</label>
            <input type="text" id="PostCode" placeholder="Province"></input>
            <label id="text">Postal Code</label>
            <input type="text" id="PostCode" placeholder="Postal Code"></input>
          </div>
        </BillingInfo>
      </OrderInfo>
      <CreditCardinfo>
        <div>
          {" "}
          <label id="card number"> Credit Card: </label>
          <input
            type="number"
            id="fullname"
            placeholder="Credit Card Number"
          ></input>{" "}
        </div>
        <div>
          <label id="card expiry"> Credit Card: </label>
          <input type="text" id="fullname" placeholder="mm/yy"></input>{" "}
          <label id="CVC #"> CVC: </label>
          <input type="number" id="CVC" placeholder="123"></input>{" "}
        </div>
      </CreditCardinfo>

      <Button type="button">Submit Order</Button>
    </Wrapper>
  );
};
const BillingInfo = styled.div`
  margin-right: 10vh;
  padding: 3px;
`;
const ShippingInfo = styled.div``;
const OrderInfo = styled.div`
  display: flex;
  padding: 5px;
`;

const SectionHeader = styled.div`
  margin-bottom: 4px;
`;

const CreditCardinfo = styled.div``;

const Wrapper = styled.div`
  border: 2px black solid;
`;
const Price = styled.p`
  font-weight: bold;
  font-size: large;
  color: black;
`;

const Image = styled.img`
  height: 180px;

  align-self: center;
`;

const Button = styled.button`
  display: inline-block;

  border-radius: 8px;
  margin-top: 12px;
  margin-left: auto;
  border: 0.5px solid #5f6368;
  &:hover {
    cursor: pointer;
    background-color: #5f6368;
  }
`;

const Name = styled.p`
  margin: 10px 0;
  color: #5f6368;
`;

export default CheckoutForm;
