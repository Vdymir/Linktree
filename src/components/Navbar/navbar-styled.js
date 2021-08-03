import styled, { keyframes } from "styled-components";

export const Navbar = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
`;

export const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const jump = keyframes`
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0px);
    }
`;

export const NavBarImg = styled.img`
  animation: ${jump} 1s linear infinite;
`;

export const NavBarTitle = styled.h2`
  font-weight: bold;
  color: #4c4c6d;
`;
