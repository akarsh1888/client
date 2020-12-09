import React, { useEffect, useState } from "react";
import Button from "../../components/button/button";
import InputField from "../../components/sign-input/sign-input";
import Spinner from "../../components/spinner/spinner";
import { signupUser } from "../../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";

let timeout;
const SignUp2 = () => {
  const [show, setShow] = useState(true);
  const [field, setFields] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [loading, setLoading] = useState(false);
  const { username, password, password2, email } = field;
  const dispatch = useDispatch();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      user: {
        email: email,
        password: password,
        username: username,
        password_confirmation: password2
      },
    };

    dispatch(signupUser(userData));
    timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign up</h2>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <InputField>
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </InputField>
          <InputField>
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </InputField>
          <InputField>
            <i className="fas fa-lock"></i>
            <input
              type={show ? "text " : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </InputField>
          <InputField>
            <i className="fas fa-lock"></i>
            <input
              type={show ? "text " : "password"}
              name="password2"
              placeholder="Password"
              value={password2}
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
        {loading ? "Loading..." : "Sign Up"}
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
    </form>
  );
};

export default SignUp2;
