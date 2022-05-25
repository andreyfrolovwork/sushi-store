import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./scss/app.scss";
import App from "./App";
/*import { createBrowserHistory } from "history";
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
const history = createBrowserHistory({ basename: '/sushi' });
const history = useRouterHistory(createHistory)({
    basename: '/app'
})*/
ReactDOM.render(
  <Router basename="/sushi">
    <Provider  store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
