import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const RowContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default RowContainer;
