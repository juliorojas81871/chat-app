import React from "react";
import { Logout } from "../index";
import { Container } from "./ChatContainerStyles";

const ChatContainer = ({ currentChat }) => {
  return (
    <>
      {currentChat && (
        <Container>
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                  alt=""
                />
              </div>
              <div className="username">
                <h3>{currentChat.username}</h3>
              </div>
            </div>
            <Logout />
          </div>
          <div className="chat-messages"></div>
          <div className="chat-input"></div>
        </Container>
      )}
    </>
  );
};

export default ChatContainer;
