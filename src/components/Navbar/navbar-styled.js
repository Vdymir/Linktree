import styled, { keyframes } from 'styled-components';


export const Navbar = styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: transparent;
`;
const jump = keyframes`

    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0px);
    }
`;


export const NavbarCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        animation: ${jump} 1s linear infinite;
    }
    h2 {
        
        font-weight: bold;
        color: #4C4C6D;
    }
`;
