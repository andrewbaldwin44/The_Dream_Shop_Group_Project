import React from "react";
import styled from "styled-components";

const StoreItem = ({ item }) => {
  return (
    <Wrapper>
      <Image src={item.imageSrc} alt={item.name} />
      <Price>{item.price}</Price>
      <Name>{item.name}</Name>
      <Button>CART</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 8px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Price = styled.p``;

const Image = styled.img``;

const Button = styled.button``;

const Name = styled.p``;

export default StoreItem;
