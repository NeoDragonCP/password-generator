import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const ResultContainer = styled.div`
  background-color: ${props => props.theme.resultContainer};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 20px;
  letter-spacing: 1px;
  padding: 12px 10px;
  height: 50px;
  width: 100%;
  border-radius: ${props => props.theme.buttonBorderRadius};

  transition: all 0.5s ease;

  .result-container #result {
    word-wrap: break-word;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
`;

export default ResultContainer;
