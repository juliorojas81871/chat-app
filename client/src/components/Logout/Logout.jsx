import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./LogoutStyles";

const Logout = () => {
  const navigate = useNavigate();
  const handleClick = async() => {
    localStorage.clear();
    navigate('/login');
  }
  return <Button onClick={handleClick}>Logout</Button>;
};

export default Logout;
