import React from 'react'
import Robot from '../../assets/robot.gif'
import { Container } from './WelcomeStyles'

const Welcome = ({currentUser}) => {
  return (
    <Container>
        <img src={Robot} alt='Robot' />
        <br />
        <h1>
            Welcome, 
            {/* <span>{currentUser.username}</span> */}
        </h1>
        <br />
        <h3>Please select a chat to Start Message</h3>
    </Container>
  )
}

export default Welcome