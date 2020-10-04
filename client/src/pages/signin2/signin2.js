import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../components/button/button";
import logo from "../../assets/img/log.svg";
import register from "../../assets/img/register.svg";
import InputField from "../../components/sign-input/sign-input";
import Spinner from "../../components/spinner/spinner";
import SignUp2 from "./signup2";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/user/user.actions";

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    border-radius: 50%;
    z-index: 6;
    transition: 1.8s ease-in-out;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  }

  ${(props) => {
    return props.toggle
      ? css`
          &:before {
            transform: translate(100%, -50%);
            right: 52%;
          }
        `
      : null;
  }}
`;
const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const SignInSignUp = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  width: 50%;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr;
  transform: translate(-50%, -50%);
  transition: 1s 0.7s ease-in-out;

  .sign-in-form {
    z-index: 2;
  }

  .sign-up-form {
    z-index: 1;
    opacity: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 5rem;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    overflow: hidden;
    transition: all 0.2s 0.7s;

    h2 {
      color: #444;
      font-size: 2.2rem;
      margin-bottom: 10px;
    }

    .show-passwrd {
      width: 380px;
      text-align: left;
      font-size: 1.3rem;
    }

    p {
      padding: 0.7rem 0;
      font-size: 1rem;
    }

    .social-media {
      display: flex;
      justify-content: center;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        width: 46px;
        border-radius: 50%;
        border: 1px solid #333;
        color: #333;
        font-size: 1.1rem;
        text-decoration: none;
        margin: 0 0.45rem;
        transition: 0.3s;

        &:hover {
          color: #4481eb;
          border-color: #4481eb;
        }
      }
    }
  }

  /* Form tag end */

  ${(props) => {
    return props.toggle
      ? css`
          left: 25%;

          .sign-up-form {
            opacity: 1;
            z-index: 2;
          }

          .sign-in-form {
            opacity: 0;
            z-index: 1;
          }
        `
      : null;
  }}/* End of SignInSignUp Div  */
`;

const PanelContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img {
    width: 100%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
  }

  .left-panel {
    pointer-events: all;
    padding: 2rem 17% 2rem 12%;
  }

  .right-panel {
    pointer-events: none;
    padding: 2rem 12% 2rem 17%;
  }

  .panel {
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    /* justify-content: space-around; */
    text-align: center;
    z-index: 7;
  }

  .panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  .panel p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateX(800px);
  }

  ${(props) => {
    return props.toggle
      ? css`
          .right-panel .image,
          .right-panel .content {
            transform: translateX(0%);
          }

          .left-panel .image,
          .left-panel .content {
            transform: translateX(-800px);
          }

          .left-panel {
            pointer-events: none;
          }

          .right-panel {
            pointer-events: all;
          }
        `
      : null;
  }}
`;

let timeout;

const SignIn2 = ({ history }) => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true);
  const [field, setFields] = useState({ email: "", password: "" });
  const { email, password } = field;

  const { currentUser, isAuthenticated, loading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.persist();
    const { value, name } = e.target;

    setFields((e) => ({ ...field, [name]: value }));
  };

  useEffect(() => {
    if (isAuthenticated) history.push("/");
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      user: {
        email: field.email,
        password: field.password,
      },
    };
    dispatch(loginUser(userData));
  };
  return (
    <Container toggle={toggle}>
      <FormsContainer>
        <SignInSignUp toggle={toggle}>
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Sign in</h2>

            {loading ? (
              <Spinner />
            ) : (
              <>
                <InputField>
                  <i className="fas fa-user" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </InputField>
                <InputField>
                  <i className="fas fa-lock" />
                  <input
                    name="password"
                    type={!show ? "password" : "text"}
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                  />

                  <Button
                    show
                    onClick={(e) => {
                      e.preventDefault();
                      setShow((t) => !t);
                    }}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputField>
              </>
            )}
            <Button type="submit" disabled={loading} sign>
              {loading ? "Loading..." : "Log In"}
            </Button>

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
          <SignUp2 />
        </SignInSignUp>
      </FormsContainer>

      <PanelContainer toggle={toggle}>
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Button panel onClick={() => setToggle((t) => !t)}>
              Sign up
            </Button>
          </div>
          <img src={logo} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Button panel onClick={() => setToggle((t) => !t)}>
              Sign In
            </Button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </PanelContainer>
    </Container>
  );
};

export default SignIn2;
