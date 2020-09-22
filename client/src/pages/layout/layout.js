import React from "react";
import styled from "styled-components";
import Header from "../header/header";

const LayoutWrapper = styled.main`
  /* margin-top: 40px; */
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>;
    </>
  );
};

export default Layout;
