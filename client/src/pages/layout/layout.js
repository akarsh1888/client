import React from "react";
import styled from "styled-components";
import Nav from "../header/header2";

const Main = styled.main`
  margin-left: 5rem;
  padding: 1rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>;
    </>
  );
};

export default Layout;
