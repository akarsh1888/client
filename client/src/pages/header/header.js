import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo2 from "../../assets/img/logo2.png";
import styled from "styled-components";
import Button from "../../components/button/button";

const HeaderWrapper = styled.header`
  font-family: "Roboto", sans-serif;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #726cf8;
  background-image: linear-gradient(315deg, #726cf8 0%, #726cf8 74%);

  img {
    margin: auto 0;
  }
  @media (max-width: 768px) {
    > div {
      display: block;
    }
    nav {
      position: absolute;
      top: 100px;
      flex-direction: column;
    }
    a {
      width: 100vw;
      margin: 0px;
      border-radius: 0px;
    }
  }
`;

const Icon = styled.div`
  display: none;
  padding: 5px;
  margin: auto 0;
  width: 25px;
  border: 2px solid #333;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }
`;

const Nav = styled.nav`
  background: none;
  display: ${(p) => (p.open ? "flex" : "none")};
  justify-content: space-around;
  margin: auto 0;
  transition: all 0.3s ease 0s;
`;

const Link = ({ isActive, children, ...props }) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};

const StyledLink = styled(Link)`
  padding: 10px 8px;
  display: block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease 0s;
  margin: 20px;
  width: 100px;
  border-radius: 50px;
  background-color: #2f4353;
  background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 84%);
  font-weight: ${(props) => (props.isActive ? "bolder" : "normal")};

  &:hover {
    background: #333;
  }
`;

const Header = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <HeaderWrapper>
        <img
          role="img"
          width={120}
          height={70}
          src={logo2}
          aria-label="emoji"
        />
        <Icon onClick={() => setToggle((t) => !t)}>
          <div />
          <div />
          <div />
        </Icon>
        <Nav open={toggle}>
          <StyledLink isActive={location.pathname === "/"} to="/">
            Join
          </StyledLink>
          <StyledLink isActive={location.pathname === "/Chat"} to="/Chat">
            Chat
          </StyledLink>
          <StyledLink isActive={location.pathname === "/Chat"} to="/Chat">
            Contact Us
          </StyledLink>
        </Nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
