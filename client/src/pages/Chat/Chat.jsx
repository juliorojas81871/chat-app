import React, {useState, useEffect} from 'react';
import { Container } from './ChatStyles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allUsersRoute } from "../../utils/APIRoutes";
import { Contacts, Welcome } from '../../components/index'

const Chat = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser ] = useState(undefined);
  const[currentChat, setCurrentChat] = useState(undefined);

  useEffect(() => {
    async function validationMenu() {
        if (!localStorage.getItem("chat-app-user")) navigate("/login");
        else setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')))     
    }
    validationMenu();
  }, [])

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
    <Container>
      <div className='container'>
        <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
        <Welcome currentUser={currentUser}/>
      </div>
    </Container>
  )
}

export default Chat