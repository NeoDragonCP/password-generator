import React, { useState } from "react";
// import elements
import { Container, ResultContainer, ColumnContainer } from "./elements/";
import { LargeButton, ResultsButton } from "./elements/";
import { Setting } from "./elements/";
// import components
import Slider from "./Slider";
// import 3rd party
import ReactTooltip from "react-tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function PasswordContainer() {
  const [password, setPassword] = useState("");

  const [passwordLength, setPasswordLength] = useState(20);

  const [useUppercase, setUseUppercase] = useState(false);
  const handleClickUppercase = () => setUseUppercase(!useUppercase);

  const [useNumbers, setUseNumbers] = useState(false);
  const handleClickNumbers = () => setUseNumbers(!useNumbers);

  const [useSymbols, setUseSymbols] = useState(false);
  const handleClickSymbols = () => setUseSymbols(!useSymbols);

  const [textCopied, setTextCopied] = useState(false);

  // Test handling change for input

  function generateNewPassword() {
    let tempPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      // Check which character to return
      let randomChance = getRandomInt(0, 4);
      if (randomChance <= 0) {
        tempPassword += getRandomLower();
      }
      // if bools are not set, default to lowercase letter
      else if (randomChance === 1) {
        useUppercase
          ? (tempPassword += getRandomUpper())
          : (tempPassword += getRandomLower());
      } else if (randomChance === 2) {
        useNumbers
          ? (tempPassword += getRandomNumber())
          : (tempPassword += getRandomLower());
      } else if (randomChance >= 3) {
        useSymbols
          ? (tempPassword += getRandomSymbol())
          : (tempPassword += getRandomLower());
      }
    }
    setPassword(tempPassword);

    // reset the text copied
    setTextCopied(false);
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  // Check if no password is there- create one
  if (password.length <= 0) {
    generateNewPassword();
  }

  return (
    <Container>
      <h2>Password Generator</h2>
      <ResultContainer>
        <span id="result">{password}</span>
        <CopyToClipboard onCopy={setTextCopied} text={password}>
          <ResultsButton data-tip="Copy to Clipboard" data-place="right">
            <i className="far fa-clipboard"></i>
            <ReactTooltip />
          </ResultsButton>
        </CopyToClipboard>
      </ResultContainer>
      {textCopied ? <span style={{ color: "red" }}>Copied.</span> : null}
      <ColumnContainer
        width={"100%"}
        height={"280px"}
        backgroundColor={"none"}
        margin={"10px"}
      >
        <Slider
          count={passwordLength}
          parentCallback={setPasswordLength}
          password={password}
        />
        <Setting>
          <label>Include uppercase letters</label>
          <input
            onChange={handleClickUppercase}
            checked={useUppercase}
            type="checkbox"
          />
        </Setting>
        <Setting>
          <label>Include numbers</label>
          <input
            onChange={handleClickNumbers}
            checked={useNumbers}
            type="checkbox"
          />
        </Setting>
        <Setting>
          <label>Include symbols</label>
          <input
            onChange={handleClickSymbols}
            checked={useSymbols}
            type="checkbox"
          />
        </Setting>
      </ColumnContainer>
      <LargeButton onClick={generateNewPassword}>Generate password</LargeButton>
    </Container>
  );
}
