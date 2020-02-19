import styled from "styled-components";
import Button from "./Button";

// ***
// colors from theme variables passed from App.js
// ***

const LargeButton = styled(Button)`
  display: block;
  width: 90%;
  height: 50px;
  text-transform: uppercase;
  position: absolute;
  bottom: 10px;
`;

export default LargeButton;
