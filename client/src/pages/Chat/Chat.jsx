import React, {useState, useEffect} from 'react';
import { Container } from './ChatStyles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allUsersRoute } from "../../utils/APIRoutes";

const Chat = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser ] = useState(undefined);
  
  useEffect(() => {
    async function validationMenu() {
        if (!localStorage.getItem("chat-app-user")) navigate("/login");
        else setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')))     
    }
  }, [])

  // check if there is a current user. If yes it will check if the user have an avatar.
  // if the user doesn't have an avatar it will go to the setAvatar page. If yes it will get
  // all the data
  useEffect(() => {
    async function currentAvatar() {
      if(currentUser){
        if(currentUser.isAvatarImageSet){
          const data = await axios.get(`${allUsersRoute}/${currentUser.id}`)
          setContacts(data.data)
        } else {
          navigate('/setAvatar');
        }
      }
    }
    currentAvatar();
  }, [])

  return (
    <Container>
      <div className='container'>

      </div>
    </Container>
  )
}

export default Chat