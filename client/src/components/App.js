import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Homepage />
        </Route>
        <Route exact path="/products/:categoryId">
          <CategoryPage />
        </Route>
        <Route exact path="/products/product/:id">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
