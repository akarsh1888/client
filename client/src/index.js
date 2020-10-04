import React from "react";
import ReactDOM from "react-dom";
import { logoutUser, setCurrentUser } from "../src/redux/user/user.actions";
import setAuthToken from "./utils/setAuthTokens";

//Store
import { store } from "./redux/store";

//Redux
import { Provider } from "react-redux";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import jwt_decode from "jwt-decode";

var role;

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set User and isAuthenticated
  role = decoded;

  // Check for expired Token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Redirect to login
    window.location.href = "/sign";
  } else {
    store.dispatch(setCurrentUser(decoded));
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
