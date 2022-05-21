import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

import "./styles/General.scss";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
