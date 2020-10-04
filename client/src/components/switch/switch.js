import React, { useState } from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  background: #333;
  cursor: pointer;
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  border-radius: 50%;
  background: #fff;
  margin-top: 1px;
  transition: transform 0.1s linear;
  transform: translate(${(p) => (p.themeActive ? "26px" : "1px")});
`;

const Switch = ({ themeActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch themeActive={themeActive} />
    </ToggleWrapper>
  );
};

export default Switch;
