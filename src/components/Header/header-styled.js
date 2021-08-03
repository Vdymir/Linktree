import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderImg = styled.img`
  width: 160px;
  border-radius: 50%;
  border: 2px solid #4c4c6d;
  transition: all 0.3s linear;

  &:hover {
    transition: all 0.3s linear;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const HeaderTitle = styled.h3`
  margin-top: 15px;
  font-size: 25px;
`;
