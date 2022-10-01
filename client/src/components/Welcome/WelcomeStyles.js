import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 90% 10%;
  gap: 0.1rem;
  overflow: hidden;
  .welcome-header {
    left: 100px;
    background-color: #080420;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .button{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #9a86f3;
        border: none;
        cursor: pointer;
        &:hover {
          background-color: #ffffff34;
        }
        @media screen and (min-width: 768px) and (max-width: 33554400px) {
          display: none;
        }
    }
    .welcome-sign {
      display: flex;
      align-items: center;
      gap: 1rem;
      .sign {
        h3 {
          color: white;
        }
      }
    }
  }

  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    img {
      height: 20rem;
    }
    span {
      color: #4e0eff;
    }
  }
`;
