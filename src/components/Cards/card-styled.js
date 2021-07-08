import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 800px;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 4px;
  background: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  transition: 0.2s linear;

  &:hover {
    transition: 0.2s linear;
    box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const Txt = styled.p`
  margin-left: 10px;
  color: ${(props) => props.color};
`;
