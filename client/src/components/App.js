import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";

import Homepage from "./Homepage";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import CategoryPage from "./CategoryPage";
import Sidebar from "./Sidebar";

function App() {
  useEffect(() => {



  }, []);

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
