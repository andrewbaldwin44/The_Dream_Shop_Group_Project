import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  requestAllItemInformation,
  receiveProducts,
  receiveCategories,
  receiveBrands,
  receiveBodyLocation,
  receiveAllItemInformationError,
  receiveAllItemInformation,
} from "../actions";

import Homepage from "./Homepage";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import CategoryPage from "./CategoryPage";
import Sidebar from "./Sidebar";

function App() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    dispatch(requestAllItemInformation());

    const products = fetch(`/products`)
      .then((response) => response.json())
      .then((data) => data.products)
      .then((products) => dispatch(receiveProducts(products)))
      .catch((error) => dispatch(receiveAllItemInformationError()));

    const categories = fetch(`/products/categories`)
      .then((response) => response.json())
      .then((data) => data.categories)
      .then((categories) => dispatch(receiveCategories(categories)))
      .catch((error) => dispatch(receiveAllItemInformationError()));

    const brands = fetch(`/brands`)
      .then((response) => response.json())
      .then((data) => data.brands)
      .then((brands) => dispatch(receiveBrands(brands)))
      .catch((error) => dispatch(receiveAllItemInformationError()));

    const bodyLocation = fetch(`/bodylocation`)
      .then((response) => response.json())
      .then((data) => data.bodyLocation)
      .then((bodyLocation) => dispatch(receiveBodyLocation(bodyLocation)))
      .catch((error) => dispatch(receiveAllItemInformationError()));

    Promise.all([products, categories, brands, bodyLocation])
      .then(() => dispatch(receiveAllItemInformation()))
      .then(() => setStatus("idle"));
  }, []);

  if (status === "loading") {
    return <div>loading...</div>;
  } else {
    return (
      <Router>
        <GlobalStyles />
        <Header />
        <Sidebar />
        <Switch>
          <Route exact={true} path="/">
            <Homepage />
          </Route>
          <Route path="/products/:categoryId">
            <CategoryPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
