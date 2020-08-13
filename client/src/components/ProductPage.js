import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cartItemAdded } from "../actions";

const ProductPage = () => {
  const dispatch = useDispatch();

  let productNumber = useParams().id;
  let [indProduct, setIndProduct] = useState();
  let [qty, setQty] = useState();

  function handleQtyChange(ev) {
    setQty(Number(ev));
  }
  console.log("THIS IS QTY-----", qty);
  React.useEffect(() => {
    fetch(`/products/product/${productNumber}`)
      .then((res) => res.json())
      .then((res) => setIndProduct(res.items));
    //   .then((category) => setIndProduct(data))
    //   .catch((err) => console.log("error"));
  }, []);

  if (indProduct) {
    const imgSrc = indProduct.imageSrc;

    return (
      <Wrapper>
        <Picture>
          <Article src={imgSrc} alt="Product"></Article>
        </Picture>
        <Info>
          <Title>{indProduct.name}</Title>
          <Price>{indProduct.price}</Price>
          <div>
            Quantity:{" "}
            <Quantity
              type="number"
              onChange={(event) => handleQtyChange(event.target.value)}
              placeholder="1"
            ></Quantity>
          </div>

          <Button onClick={() => dispatch(cartItemAdded(indProduct, qty))}>
            Add to cart
          </Button>
        </Info>
      </Wrapper>
    );
  } else {
    return <div>Loading Product Details...</div>;
  }
};

const Picture = styled.div`
  margin-left: 20vw;
  margin-top: 10vh;
  box-shadow: 1px 1px 1px 1px lightgray;
`;

const Info = styled.div`
  margin-top: 10vh;
  width: 50vw;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Quantity = styled.input`
  width: 50px;
  padding: 5px;
  margin-top: 5px;
`;
const Button = styled.button`
  border: 1px solid ghostwhite;
  padding: 7px;
  color: #fff;
  box-shadow: 2px 2px 2px 2px lightgray;
  margin-left: 10px;
  background-color: #1e90ff;
  border: 1px solid #a9a9a9;
  transition: transform 0.2s;
  margin-top: 15px;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
  }
`;

const Price = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px;
`;

const Title = styled.span`
  font-size: 20px;
`;

const Article = styled.img`
  width: 300px;
  height: 300px;
`;
export default ProductPage;
