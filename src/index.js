import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import Reducers from "./reducers";
import App from "./App";
import "./index.css";

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);