import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import { Container } from "./ContactsStyles";

const Contacts = ({ contacts, currentUser, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, username) => {
    setCurrentSelected(index);
    changeChat(username);
  };

  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>snappy</h3>
          </div>
          <div className="contacts">
            {contacts.map(({username, avatarImage, _id}, index) => {
              return (
                <div
                  className={`contact ${
                    (index === currentSelected) && "selected"
                  }`}
                  key={_id}
                  onClick={() => changeCurrentChat(index, username)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3>{username}</h3>
                  </div>
                </div>
              );
            })}
  
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Contacts;
