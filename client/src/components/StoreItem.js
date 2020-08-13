import React from "react";
import styled, { keyframes } from "styled-components";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAddItem, cartItemAdded, cartAddItemError } from "../actions";

const StoreItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(cartItemAdded(item));
    setIsClicked(!isClicked);
  };

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
        onClick={handleClick}
        className={`${isClicked && "animation"} ${
          item.numInStock < 1 && "outOfStock"
        }`}
        disabled={item.numInStock < 1 && true}
      >
        <span>Add to Cart </span>
        <GrCart size={25} />
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
  transition: transform ease 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.035);
  }
  &&.outOfStock {
    opacity: 0.5;
    &&:hover {
      cursor: default;
      transform: scale(1);
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

const addCart = keyframes`
0%{
  transform: translateX(0px);
}
10%{
  transform: translateX(-3px);
}
50%{
  transform: translateX(100px);
}
51%{
  transform: translateX(0px);
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  margin-left: auto;
  border: 0.5px solid #5f6368;
  font-weight: bold;
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
    right: 15px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  &:hover {
    cursor: pointer;
    background-color: #47d688;
    svg {
      opacity: 1;
    }
  }
  &&.animation svg {
    animation: ${addCart} 2000ms forwards;
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
