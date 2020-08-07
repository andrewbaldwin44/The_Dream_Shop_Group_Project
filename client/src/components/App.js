import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact={true} path="/"></Route>
        <Route path="/products/:categoryId"></Route>
      </Switch>
    </Router>
  );
}

export default App;
