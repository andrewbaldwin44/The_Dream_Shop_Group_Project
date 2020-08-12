import React, { createRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const [clientName, setClientName] = React.useState("");
  const nameInput = createRef();
  const addressInput = createRef();
  const postalCodeInput = createRef();
  const provinceInput = createRef();

  const cityInput = createRef();
  const billingProvinceInput = createRef();
  const billingNameInput = createRef();
  const billingAddressInput = createRef();
  const billingPostalCodeInput = createRef();
  const villeInput = createRef();

  const cardNumberInput = createRef();
  const expiryInput = createRef();

  const cvcInput = createRef();

  let checkoutData = cartData.map((item) => {
    return { productId: item.id, quantity: item.quantity };
  });

  let userInfo = () => {
    return {
      personalinfo: {
        name: nameInput.current.value,
        address: addressInput.current.value,
        postalcode: postalCodeInput.current.value,
        city: cityInput.current.value,
        province: provinceInput.current.value,
      },
      shippingDetails: {
        name: billingNameInput.current.value,
        address: billingAddressInput.current.value,
        postalcode: billingPostalCodeInput.current.value,
        city: villeInput.current.value,
        province: billingProvinceInput.current.value,
      },
      paymentInfo: {
        cardNumber: cardNumberInput.current.value,
        expiry: expiryInput.current.value,
        cvc: cvcInput.current.value,
      },
    };
  };

  let handleCheckOut = (event) => {
    event.preventDefault();
    console.log(userInfo());
    fetch("/purchase", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        purchasedItems: checkoutData,
        user: userInfo(),
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.status, data.message);

        if (data.status === 401) {
          window.alert(data.message);
        }
      })
      .catch((error) => console.log("this", error));
  };
  return (
    <Wrapper>
      <form onSubmit={handleCheckOut}>
        <OrderInfo>
          <ShippingInfo>
            <SectionHeader>Shipping Information:</SectionHeader>
            <div>
              <label id="text">Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Name"
                ref={nameInput}
                required
              ></input>
            </div>
            <div>
              <label id="text">Address</label>
              <input
                type="address"
                id="address"
                placeholder="Address"
                ref={addressInput}
                required
              ></input>
              <label id="text">City</label>
              <input
                type="text"
                id="city"
                placeholder="ville"
                ref={cityInput}
                required
              ></input>
            </div>
            <div>
              <label id="text">Province</label>
              <input
                type="text"
                id="PostCode"
                placeholder="Province"
                ref={provinceInput}
                required
              ></input>
              <label id="text">Postal Code</label>
              <input
                type="text"
                id="PostCode"
                placeholder="Postal Code"
                ref={postalCodeInput}
                required
              ></input>
            </div>
          </ShippingInfo>
          <BillingInfo>
            {" "}
            <SectionHeader>Billing Information:</SectionHeader>
            <div>
              <label id="text">Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Name"
                ref={billingNameInput}
                required
              ></input>
            </div>
            <div>
              <label id="text">Address</label>
              <input
                type="address"
                id="address"
                placeholder="Address"
                ref={billingAddressInput}
                required
              ></input>
              <label id="text">City</label>
              <input
                type="text"
                id="city"
                placeholder="ville"
                ref={villeInput}
                required
              ></input>
            </div>
            <div>
              <label id="text">Province</label>
              <input
                type="text"
                id="PostCode"
                placeholder="Province"
                ref={billingProvinceInput}
                required
              ></input>
              <label id="text">Postal Code</label>
              <input
                type="text"
                id="PostCode"
                placeholder="Postal Code"
                ref={billingPostalCodeInput}
                required
              ></input>
            </div>
          </BillingInfo>
        </OrderInfo>
        <CreditCardinfo>
          <div>
            {" "}
            <label id="card number"> Credit Card: </label>
            <input
              type="number"
              id="number"
              placeholder="Credit Card Number"
              ref={cardNumberInput}
              required
            ></input>{" "}
          </div>
          <div>
            <label id="card expiry"> Credit Card: </label>
            <input
              type="text"
              id="expiry"
              placeholder="mm/yy"
              ref={expiryInput}
              required
            ></input>{" "}
            <label id="CVC #"> CVC: </label>
            <input
              type="number"
              id="CVC"
              placeholder="123"
              ref={cvcInput}
              required
            ></input>{" "}
          </div>
        </CreditCardinfo>

        <Button type="submit">Submit Order</Button>
      </form>
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
