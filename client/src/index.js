import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
import App from "./components/App";

import AuthProvider from './components/AuthContext';

const store = configureStore();

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>,
  document.getElementById("root")
);
