import React, { useState, useEffect } from "react";
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
    <>
      <GlobalStyles />
      <Header />
    </>
  );
}

export default App;
