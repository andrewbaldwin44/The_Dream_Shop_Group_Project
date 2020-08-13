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
    <>
      <Back>
        <Link to="/cart">
          {" "}
          <BackIcon></BackIcon>
          <div>Return to Cart</div>
        </Link>
      </Back>
      <Wrapper>
        <CheckoutForm />
        <ItemsBox>
          <Head>Review Your Order:</Head>
          {cartData.map((data) => (
            <CheckoutItem item={data} key={data.id} />
          ))}
          <Total>ORDER TOTAL : ${total}</Total>
        </ItemsBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 40px;
`;
const ItemsBox = styled.div`
  padding: 10px;
`;
const Back = styled.div`
  font-size: large;
  margin-bottom: 20px;
  display: flex;
  margin-left: 40px;
`;
const BackIcon = styled(GrFormPreviousLink)`
  font-size: 40px;
`;

const Head = styled.h2`
  font-weight: bold;
  font-size: larger;
  margin-bottom: 12px;
`;

const Total = styled.div`
  margin-top: 15px;
  font-weight: bold;
  font-size: large;
`;
export default CheckoutPage;
