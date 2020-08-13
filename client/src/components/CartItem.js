import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cartChangeQuantity } from "../actions";
import { FiTrash2 } from "react-icons/fi";

export const roundNumber = (num) => {
  return Math.round(num * 100) / 100;
};

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Item>
        <img src={item.imageSrc} alt={item.name} />
        <Info>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </Info>
        <button
          onClick={() => dispatch(cartChangeQuantity(index, -item.quantity))}
        >
          <FiTrash2 />
        </button>
      </Item>
      <Quantity>
        <div>
          <input
            type="button"
            value="-"
            onClick={() => {
              dispatch(cartChangeQuantity(index, -1));
            }}
          />
          <input type="text" disabled value={item.quantity} />
          <input
            type="button"
            value="+"
            onClick={() => {
              dispatch(cartChangeQuantity(index, 1));
            }}
          />
        </div>
      </Quantity>
      <Price>
        <span>
          $
          {roundNumber(
            Number(item.price.substring(1, item.price.length)) * item.quantity
          )}
        </span>
      </Price>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1100px;
  height: 150px;
  display: flex;
  p {
    display: inline-block;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 0.9em;
  }
`;
const Item = styled.div`
  width: 700px;
  height: auto;
  border: 1px solid #eee;
  display: flex;
  padding: 12px;
  position: relative;
  img {
    object-fit: contain;
  }
  button {
    position: absolute;
    bottom: 25px;
    right: 25px;
    height: 40px;
    width: 40px;
    font-size: 2em;
    outline: none;
    transition: all ease 0.4s;
    &:hover {
      color: red;
    }
  }
`;
const Quantity = styled.div`
  width: 250px;
  height: auto;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="button"] {
    color: white;
    background-color: #47d688;
    width: 35px;
    height: 35px;
    border: 0.5px solid #eee;
    font-size: 1.6em;
    &:hover {
      cursor: pointer;
    }
  }
  input[type="text"] {
    width: 35px;
    height: 35px;
    border-top: 0.5px solid #eee;
    border-bottom: 0.5px solid #eee;
    border-left: none;
    border-right: none;
    font-size: 1.1em;
    text-align: center;
    position: relative;
    bottom: 3px;
    padding-left: 1px;
  }
`;
const Price = styled.div`
  width: 150px;
  height: auto;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  h4 {
    font-weight: bold;
    font-size: large;
  }
  p {
    font-size: 1.1em;
    color: green;
  }
`;

export default CartItem;
