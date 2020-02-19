import styled from "styled-components";

// ***
// colors from theme variables passed from App.js
// ***

const Container = styled.div`
  width: 400px;
  height: 500px;
  padding: 20px;
  max-width: 100%;
  background-color: ${props => props.theme.containerBG};
  box-shadow: 0px 2px 20px ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};

  /* position center of screen
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  */
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  transition: all 0.5s ease;

  @import url("https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap");
  font-family: "Nunito", sans-serif;
  color: ${props => props.theme.fontLight};

  /* Remove the "card look"/shadow for mobile */
  @media only screen and (max-width: 600px) {
    box-shadow: none;
  }

  h2 {
    margin: 10px 0 20px;
  }
`;

export default Container;
