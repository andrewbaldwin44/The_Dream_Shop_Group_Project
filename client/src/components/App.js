import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import CategoryPage from "./CategoryPage";
import Sidebar from "./Sidebar";

function App() {
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

export default App;
