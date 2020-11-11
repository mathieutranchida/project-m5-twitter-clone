import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import history from "./history";
import { Router } from "react-router";

import { CurrentUserProvider } from "./components/CurrentUserContext";
import { TweetProvider } from "./components/TweetComponent/TweetContext";

ReactDOM.render(
  <Router history={history}>
    <CurrentUserProvider>
      <TweetProvider>
        <App />
      </TweetProvider>
    </CurrentUserProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
