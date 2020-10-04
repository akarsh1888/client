import { createGlobalStyle, ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import { Route, Switch } from "react-router-dom";
import SignIn2 from "./pages/signin2/signin2";
import PrivateRoute from "./components/utility/privateroute";
import Alert from "../src/components/alert/alert";
import DarkTheme from "../src/themes/dark";
import LightTheme from "../src/themes/light";

const GlobalStyle = createGlobalStyle`
html, body {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
  min-height:100vh;
  box-sizing: border-box;
  background-color: ${(p) => p.theme.bodyBGColor};
  color:${(p) => p.theme.bodyFontColor}
  
}
*{
  border :1px solid #333;

}
body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #6649b8;
}

a{
  text-decoration:none;
}
`;

const App = () => {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <Alert />
      <GlobalStyle />
      <Route path="/sign" exact component={SignIn2} />
      <Switch>
        <PrivateRoute path="/" exact component={Join} />
        <PrivateRoute path="/chat" component={Chat} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
