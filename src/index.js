import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
// import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { ItemProvider } from "./Context";

const helmetContext = {};

ReactDOM.render(
  <ItemProvider>
    {/* <Router basename="2020"> */}
    <Router>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </Router>
  </ItemProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
