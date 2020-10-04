import styled, { css } from "styled-components";

const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  background: #2979ff;
  width: 100%;
  cursor: pointer;

  ${(props) => {
    return props.sign
      ? css`
          width: 150px;
          background-color: #5995fd;
          outline: none;
          height: 49px;
          border-radius: 49px;
          color: #fff;
          font-weight: 600;
          margin: 10px 0;
          transition: 0.5s;

          &:hover {
            background-color: #4d84e2;
          }
        `
      : null;
  }}

  ${(props) => {
    return props.send
      ? css`
          background: #297f;
          width: 20%;
        `
      : null;
  }}

  ${(props) => {
    return props.show
      ? css`
          /* background: none; */
          border: 6px solid #fff;
          border-radius: 25px;
          padding: 4px;
          margin-left: 4px;
          color: #fff;
        `
      : null;
  }}

  ${(props) => {
    return props.header
      ? css`
          background-color: #2f4353;
          background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);
          width: 10%;
          margin-right: 130px;
          margin-top: auto;
          margin-bottom: auto;
          border-radius: 50px;
          transition: all 0.3s ease 0s;
          &:hover {
            background: #333;
            color: #fff;
          }
        `
      : null;
  }}



${(props) => {
    return props.panel
      ? css`
          margin: 0;
          background: none;
          border: 2px solid #fff;
          width: 130px;
          height: 41px;
          font-weight: 600;
          font-size: 0.8rem;
        `
      : null;
  }}

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export default Button;
