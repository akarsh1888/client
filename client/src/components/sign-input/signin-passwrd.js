import React, { useState } from "react";
import styled from "styled-components";
import Button from "../button/button";
import SignInput from "./sign-input";

const InputWrapper = styled.div`
  display: flex;

  ~ div {
    margin-bottom: 8px;
  }
`;

const InputPassword = styled(SignInput).attrs(() => ({
  type: "password",
  placeholder: "Your Password",
}))`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const SignPassword = (props) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <InputWrapper>
        <InputPassword {...props} />
        <Button
          show
          onClick={(e) => {
            e.preventDefault();
            setShow((t) => !t);
          }}
        >
          {show ? "Hide" : "Show"}
        </Button>
      </InputWrapper>
      <div>{show ? props.value : ""}</div>
    </>
  );
};

export default SignPassword;
