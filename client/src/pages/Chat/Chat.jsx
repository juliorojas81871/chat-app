import React, { useState, useEffect, useRef } from "react";
import { Container } from "./ChatStyles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../../utils/APIRoutes";
import { Contacts, Welcome, ChatContainer } from "../../components/index";
import { io } from "socket.io-client";
import { useStateContext } from '../../contexts/ContextProvider'

const Chat = () => {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const {activeMenu, setActiveMenu } = useStateContext();

  // if there is no user in the local user, it will atomataically go to login
  useEffect(() => {
    async function validationMenu() {
      if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
        navigate("/login");
      } else {
        setCurrentUser(
          await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
          )
        );
      }
    }
    validationMenu();
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  // check if there is a current user. If yes it will check if the user have an avatar.
  // if the user doesn't have an avatar it will go to the setAvatar page. If yes it will get
  // all the data
  useEffect(() => {
    async function currentAvatar() {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/setAvatar");
        }
      }
    }
    currentAvatar();
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <Container>
      {activeMenu ? (
        <div className="container open">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      ) : (
        <div className="container closed">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      )}
      </Container>
    </>
  );
};

export default Chat;
