import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import CategoryPage from "./CategoryPage";
import Brands from "./Brands";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Homepage />
        </Route>
        <Route path="/products/category">
          <CategoryPage />
        </Route>
        <Route path="/brands">
          <Brands />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
