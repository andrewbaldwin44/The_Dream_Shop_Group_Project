import React from "react";
import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAddItem, cartItemAdded, cartAddItemError } from "../actions";

const StoreItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      to={`/products/product/${item.id}`}
      className={item.numInStock < 1 && "outOfStock"}
      onClick={(event) => {
        if (item.numInStock < 1) {
          event.preventDefault();
        }
      }}
    >
      <Image src={item.imageSrc} alt={item.name} />
      <Name>
        {item.name.length > 50
          ? item.name.substr(0, item.name.substr(0, 55).lastIndexOf(" ")) +
            " ..."
          : item.name}
      </Name>
      <Price>{item.price}</Price>
      <Button
        onClick={(event) => {
          event.preventDefault();
          dispatch(cartItemAdded(item));
        }}
        className={item.numInStock < 1 && "outOfStock"}
        disabled={item.numInStock < 1 && true}
      >
        <MdAddShoppingCart size={25} />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  position: relative;
  margin: 20px 12px;
  padding: 15px;
  width: 350px;
  height: 350px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  &&.outOfStock {
    opacity: 0.5;
    &&:hover {
      cursor: default;
    }
    &&::before {
      content: "OUT OF STOCK";
      position: absolute;
      color: white;
      background-color: #47d688;
      opacity: 2;
      font-size: 1.5em;
      padding: 10px;
      left: 20px;
      top: 60px;
      width: 310px;
      text-align: center;
      font-weight: bold;
    }
  }
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
  width: 50px;
  height: 40px;
  border-radius: 8px;
  margin-left: auto;
  border: 0.5px solid #5f6368;
  &:hover {
    cursor: pointer;
    background-color: #5f6368;
  }
  &&.outOfStock {
    &:hover {
      cursor: not-allowed;
      background-color: white;
    }
  }
`;

const Name = styled.p`
  margin: 10px 0;
  color: #5f6368;
`;

export default StoreItem;
