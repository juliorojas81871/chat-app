import React, {useState, useEffect, useRef} from 'react';
import { Container } from './ChatStyles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allUsersRoute, host } from "../../utils/APIRoutes";
import { Contacts, Welcome, ChatContainer } from '../../components/index'
import {io} from 'socket.io-client';

const Chat = () => {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser ] = useState(undefined);
  const[currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // if there is no user in the local user, it will atomataically go to login
  useEffect(() => {
    async function validationMenu() {
        if(!localStorage.getItem("chat-app-user")){
          navigate("/login");
        } else {
           setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')))
           setIsLoaded(true);
        }     
    }
    validationMenu();
  }, [])

  useEffect(()=>{
    if(currentUser){
      socket.current = io(host);
      socket.current.emit('add-user', currentUser._id);
    }
  },[currentUser])  

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
  }, [currentUser])

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
    <Container>
      <div className='container'>
        <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
        {isLoaded &&
          currentChat === undefined ? (
            <Welcome currentUser={currentUser} />
          ) : (
            <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket} />
          )}
        
      </div>
    </Container>
    </>
  )
}

export default Chat