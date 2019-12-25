import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./modules/store";

const Root = ({store}) => (
  <Provider store={store}>
    <App/>
  </Provider>
);


ReactDOM.render(<Root store={store}/>, document.getElementById("root"));