import React from "react";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import SignIn from "./pages/signin/signin";
import SignIn2 from "./pages/signin2/signin2";

const GlobalStyle = createGlobalStyle`
html, body {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
  min-height:100vh;
  box-sizing: border-box;
  /* background-color: #1a1a1d; */

}
a{
  text-decoration:none;
}
`;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        {/* <Route path="/" exact component={Join} /> */}
        <Route path="/signin" exact component={SignIn} />
        <Route path="/" exact component={SignIn2} />
        {/* <Route path="/chat" component={Chat} /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
