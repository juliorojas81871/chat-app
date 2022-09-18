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
    @media (max-width: 768px) {
      h3 {
        font-size: 1.1rem;
      }
    }
    img {
      height: 20rem;
    }
    span {
      color: #4e0eff;
    }
  }
`;
