import React, { useState, useEffect } from "react";
import Robot from "../../assets/robot.gif";
import { Container } from "./WelcomeStyles";
import { Logout } from "../index";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
      async function getUsername() {
        setUserName(
            await JSON.parse(
              localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
            ).username
          );
      }
      getUsername();
  }, []);

  return (
    <Container>
      <div className="welcome-header">
        <div className="welcome-sign">
          <div className="sign">
            <h3>Welcome</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="welcome">
        <img src={Robot} alt="Robot" />
        <br />
        <h1>
          Welcome, <span>{userName}</span>
        </h1>
        <br />
        <h3>Please select a chat to Start Message</h3>
      </div>
    </Container>
  );
};

export default Welcome;
