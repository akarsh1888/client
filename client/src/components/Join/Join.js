import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../pages/layout/layout";
import Button from "../button/button";
import "./Join.css";

export default function () {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <Layout>
        <div className="joinOuterContainer">
          <div className="joinInnerContainer">
            <h1 className="heading">Join</h1>
            <div>
              <input
                placeholder="Name"
                className="joinInput"
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="Room"
                className="joinInput mt-20"
                type="text"
                onChange={(event) => setRoom(event.target.value)}
              />
            </div>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <Button type="submit">SignIn</Button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
