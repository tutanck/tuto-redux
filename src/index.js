import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";
import { Store } from "./app/store";
import Counter from "./features/Counter";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* <App /> */}
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
