import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const ColumnContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};

  position: relative;
  margin: ${props => props.margin};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ColumnContainer;
