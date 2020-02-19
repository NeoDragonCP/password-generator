import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import PasswordContainer from "./components/PasswordContainer";
import { RowContainer } from "./components/elements";
import { ThemeButton } from "./components/elements";

const theme1 = {
  mainBG: "#9ACEFF",
  containerBG: "#617BE3",
  fontLight: "#ffff",
  buttonBG: "#550A46",
  resultContainer: "#4A69BB",
  borderRadius: "0px",
  buttonBorderRadius: "0px",
  boxShadow: "rgba(0, 0, 0, 0.5)"
};

const theme2 = {
  mainBG: "#FCF8E8",
  containerBG: "#5B8C85",
  fontLight: "#ffff",
  buttonBG: "#ECCE6D",
  resultContainer: "#434E52",
  borderRadius: "6px",
  buttonBorderRadius: "6px",
  boxShadow: "rgba(0, 0, 0, 0.5)"
};
const theme3 = {
  mainBG: "#323551",
  containerBG: "#21243D",
  fontLight: "#ffff",
  buttonBG: "#FF7C7C",
  resultContainer: "#4A518A",
  borderRadius: "6px",
  buttonBorderRadius: "6px",
  boxShadow: "rgba(255, 255, 255, 0.5)"
};
const theme4 = {
  mainBG: "#C0E0E0",
  containerBG: "#F0134D",
  fontLight: "#ffff",
  buttonBG: "#7BC2C3",
  resultContainer: "#700925",
  borderRadius: "6px",
  buttonBorderRadius: "50vh",
  boxShadow: "rgba(0, 0, 0, 0.5)"
};

function App() {
  const [currentTheme, setTheme] = useState(theme3);

  const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${currentTheme.mainBG};
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding:5% 0;
    transition: all 0.5s ease;
  }

  @media only screen and (max-width: 600px) {
  body {
    background-color: ${currentTheme.containerBG};;
  }
}
`;

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <GlobalStyles />
        <PasswordContainer />

        {/* Theme Buttons*/}
        <RowContainer width={"400px"} height={"100px"} backgroundColor={"none"}>
          <ThemeButton
            theme={theme1}
            onClick={() => setTheme(theme1)}
          ></ThemeButton>
          <ThemeButton
            theme={theme2}
            onClick={() => setTheme(theme2)}
          ></ThemeButton>
          <ThemeButton
            theme={theme3}
            onClick={() => setTheme(theme3)}
          ></ThemeButton>
          <ThemeButton
            theme={theme4}
            onClick={() => setTheme(theme4)}
          ></ThemeButton>
        </RowContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
