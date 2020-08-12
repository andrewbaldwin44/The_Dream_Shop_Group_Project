import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductPage = () => {
  let productNumber = useParams().id;
  let [indProduct, setIndProduct] = useState();

  React.useEffect(() => {
    fetch(`/products/product/${productNumber}`)
      .then((res) => res.json())
      .then((res) => setIndProduct(res.items));
    //   .then((category) => setIndProduct(data))
    //   .catch((err) => console.log("error"));
    // eslint-disable-next-line
  }, []);

  if (indProduct) {
    const imgSrc = indProduct.imageSrc;

    return (
      <Wrapper>
        <ProductData>
          <Info>
            <ProductInfo>
              <div>{indProduct.name}</div>
              <div>{indProduct.category}</div>
            </ProductInfo>
          </Info>
          <Picture>
            <img src={imgSrc} alt="Product"></img>
            <div>{indProduct.price}</div>
            <div>Qty</div>
            <input type="text" value="1"></input>
            <button>add to cart</button>
          </Picture>
        </ProductData>
        <Content>
          <p>Lorem ipsum.....</p>
        </Content>
      </Wrapper>
    );
  } else {
    return <div>Loading Product Details...</div>;
  }
};

const Content = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  border: 2px solid grey;
  width: 50vw;
  border-radius: 4px;
`;
const ProductData = styled.div`
  display: flex;
`;

const Picture = styled.div`
  margin-left: 20vw;
  margin-top: 10vh;
`;
const Wrapper = styled.div`
  position: relative;
  border: 2px grey solid;
  border-radius: 4px;
  padding: 5px;
  margin: 3px 3px 3px 3px;
`;
const Info = styled.div`
  margin-top: 10vh;
  border: 2px solid black;
  width: 50vw;
  margin-left: 20px;
`;
const ProductInfo = styled.div``;
export default ProductPage;
