import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../components/button/button";
import logo from "../../assets/img/log.svg";
import register from "../../assets/img/register.svg";

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

  img {
    width: 100%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
  }

  .panels-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .panel {
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    /* justify-content: space-around; */
    text-align: center;
    z-index: 7;
  }
  .left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
  }

  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
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

  .btn.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateX(800px);
  }

  ${(props) => {
    return props.toggle
      ? css`
          &:before {
            transform: translate(100%, -50%);
            right: 52%;
          }

          .left-panel .image,
          .left-panel .content {
            transform: translateX(-800px);
          }

          .signin-signup {
            left: 25%;
          }

          form.sign-up-form {
            opacity: 1;
            z-index: 2;
          }

          form.sign-in-form {
            opacity: 0;
            z-index: 1;
          }

          .right-panel .image,
          .right-panel .content {
            transform: translateX(0%);
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
const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const SignInSignUp = styled.div`
  transform: translate(-50%, -50%);
  transition: 1s 0.7s ease-in-out;
  position: absolute;
  top: 50%;
  left: 75%;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;

  .sign-in-form {
    z-index: 2;
  }

  .sign-up-form {
    opacity: 0;
    z-index: 1;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 5rem;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    transition: all 0.2s 0.7s;

    h2 {
      font-size: 2.2rem;
      color: #444;
      margin-bottom: 10px;
    }

    .input-field {
      max-width: 380px;
      width: 100%;
      height: 55px;
      background-color: #f0f0f0;
      margin: 10px 0;
      border-radius: 55px;
      display: grid;
      grid-template-columns: 15% 85%;
      padding: 0 0.4rem;
      position: relative;

      i {
        text-align: center;
        line-height: 55px;
        color: #acacac;
        transition: 0.5s;
        font-size: 1.1rem;
      }

      input {
        background: none;
        outline: none;
        border: none;
        line-height: 1;
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;

        input::placeholder {
          color: #aaa;
          font-weight: 500;
        }
      }
    }

    p {
      padding: 0.7rem 0;
      font-size: 1rem;
    }

    .social-media {
      display: flex;
      justify-content: center;

      a {
        height: 46px;
        width: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.45rem;
        color: #333;
        border-radius: 50%;
        border: 1px solid #333;
        text-decoration: none;
        font-size: 1.1rem;
        transition: 0.3s;

        &:hover {
          color: #4481eb;
          border-color: #4481eb;
        }
      }
    }
  }

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
  }}
`;

const SignIn2 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container toggle={toggle}>
      <FormsContainer>
        <SignInSignUp toggle={toggle}>
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Button type="submit" sign>
              Login
            </Button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Button type="submit" sign>
              Sign Up
            </Button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>{" "}
        </SignInSignUp>
      </FormsContainer>

      <div class="panels-container">
        <div className="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Button
              class="btn transparent"
              onClick={() => setToggle((t) => !t)}
            >
              Sign up
            </Button>
          </div>
          <img src={logo} class="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Button
              class="btn transparent"
              onClick={() => setToggle((t) => !t)}
            >
              Sign In
            </Button>
          </div>
          <img src={register} class="image" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default SignIn2;
