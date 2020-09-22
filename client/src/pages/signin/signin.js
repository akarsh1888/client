import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../components/button/button";
import SignInput from "../../components/sign-input/sign-input";
import SignPassword from "../../components/sign-input/signin-passwrd";
import Spinner from "../../components/spinner/spinner";
import Layout from "../layout/layout";

const Form = styled.form`
  margin: auto;
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 16px;
  color: black;
`;

let timeout;

const SignIn = () => {
  const [field, setFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { username, password } = field;

  const handleChange = (e) => {
    e.persist();
    const { value, name } = e.target;

    setFields((e) => ({ ...field, [name]: value }));
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            timeout = setTimeout(() => {
              setLoading(false);
            }, 3000);
          }}
        >
          <h1>Sign In</h1>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <SignInput
                name="username"
                placeholder="Your Username"
                value={username}
                onChange={handleChange}
                type="text"
              />
              <SignPassword
                name="password"
                value={password}
                onChange={handleChange}
              />
            </>
          )}
          <Button secondary type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </Button>
        </Form>
      </Layout>
    </>
  );
};

export default SignIn;
