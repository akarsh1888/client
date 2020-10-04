import styled from "styled-components";

const InputField = styled.div`
  /* 
   border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  font-family: "Open Sans";
  margin-bottom: 8px;
  width: 100%;
  height: 40px; */

  position: relative;
  display: grid;
  grid-template-columns: 15% 65% 20%;
  max-width: 380px;
  width: 100%;
  height: 55px;
  margin: 10px 0;
  border-radius: 55px;
  background-color: #f0f0f0;
  padding: 0 0.4rem;

  i {
    color: #acacac;
    line-height: 55px;
    font-size: 1.1rem;
    text-align: center;
    transition: 0.5s;
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
`;

export default InputField;
