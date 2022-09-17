import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  .welcome-header {
    background-color: #080420;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
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
  .welcome{
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
