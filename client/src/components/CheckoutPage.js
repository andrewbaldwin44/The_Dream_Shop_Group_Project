import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";

import useDocumentTitle from '../hooks/useDocumentTitle.hook';

const CheckoutPage = () => {
  const cartData = useSelector((state) => state.cart.cart);

  useDocumentTitle(`Dream Store - Checkout`, 'Dream Store');

  let total = 0;
  cartData.map(
    (item) => (total += parseFloat(item.price.replace("$", "")) * item.quantity)
  );

  return (
    <Wrapper>
      <Back>
        <Link to="/cart">
          {" "}
          <BackIcon></BackIcon>
          <div>Return to Cart</div>
        </Link>
      </Back>
      <div>Your Current Order:</div>
      <ItemsBox>
        {cartData.map((data) => (
          <CheckoutItem item={data} key={data.id} />
        ))}
        <div>ORDER TOTAL : ${total}</div>
      </ItemsBox>
      <CheckoutForm></CheckoutForm>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ItemsBox = styled.div`
  width: 70vw;
  padding: 10px;
`;

const Back = styled.div`
  font-size: large;
  margin-bottom: 5vh;
  display: flex;
`;

const BackIcon = styled(GrFormPreviousLink)`
  font-size: 40px;
`;
export default CheckoutPage;
