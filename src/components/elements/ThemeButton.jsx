import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const ThemeButton = styled.button`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 8px 12px;
  margin: 12px;
  background: rgb(33, 36, 61);
  background: linear-gradient(
    0deg,
    ${props => props.theme.containerBG} 0%,
    ${props => props.theme.containerBG} 33%,
    ${props => props.theme.buttonBG} 34%,
    ${props => props.theme.buttonBG} 66%,
    ${props => props.theme.resultContainer} 67%,
    ${props => props.theme.resultContainer} 100%
  );

  border-style: solid;
  border-color: #ffff;
  border-radius: 50%;
`;

export default ThemeButton;
