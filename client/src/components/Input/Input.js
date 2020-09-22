import React from "react";
import Button from "../button/button";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    {/* <button className="sendButton" >Send</button> */}
    <Button onClick={(e) => sendMessage(e)} send>
      Send
    </Button>
  </form>
);

export default Input;
