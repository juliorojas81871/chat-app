import React from "react";
import Robot from "../../assets/robot.gif";
import { Container } from "./WelcomeStyles";
import { Logout } from "../index";

const Welcome = ({ currentUser }) => {
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
          Welcome, <span>{currentUser.username}</span>
        </h1>
        <br />
        <h3>Please select a chat to Start Message</h3>
      </div>
    </Container>
  );
};

export default Welcome;
