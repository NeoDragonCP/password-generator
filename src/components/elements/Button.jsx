import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const Button = styled.button`
  border: none;
  color: ${props => props.theme.fontLight};
  cursor: pointer;
  font-size: 18px;
  padding: 8px 12px;
  background-color: ${props => props.theme.buttonBG};
  border-radius: ${props => props.theme.buttonBorderRadius};

  transition: all 0.5s ease;
`;

export default Button;
