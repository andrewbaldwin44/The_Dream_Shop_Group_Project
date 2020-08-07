import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import CategoryPage from "./CategoryPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/"></Route>
        <Route path="/products/:categoryId"></Route>
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

export default App;
