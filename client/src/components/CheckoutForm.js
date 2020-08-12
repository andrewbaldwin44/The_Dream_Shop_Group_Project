import React from "react";
import styled from "styled-components";

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

const CreditCardinfo = styled.div`
  border: 1px grey solid;
  margin-top: 2px;
`;

const Wrapper = styled.div`
  border: 2px black solid;
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

export default CheckoutForm;
