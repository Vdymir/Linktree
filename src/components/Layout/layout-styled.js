import styled from "styled-components";

export const Linktree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 30px auto 0;
  height: calc(100vh - (70px + 2rem));
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 160px;
    border-radius: 50%;
    border: 2px solid #4c4c6d;
    transition: all 0.3s linear;
    &:hover {
      transition: all 0.3s linear;
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
  }
  h3 {
    margin-top: 15px;
    font-size: 25px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
