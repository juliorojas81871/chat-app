import React from "react";
import { Logout } from "../index";
import { Container } from "./ChatContainerStyles";
import { ChatInput, Messages } from "../index";

const ChatContainer = ({ currentChat }) => {
  const handleSendMsg = async (msg) => {
    alert(msg)
  };

  return (
    currentChat && (
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
        <Messages />
        <ChatInput handleSendMsg={handleSendMsg} />
      </Container>
    )
  );
};

export default ChatContainer;
