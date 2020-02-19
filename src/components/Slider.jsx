import React from "react";
import styled from "styled-components";

const SliderStyles = styled.div`
  min-width:100%;
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 1rem;
  font-size:1.2rem;

  label {
    margin-right: 0rem;
    flex: 2;
    text-align:center;
  }
  p {
    margin-left: 0.6rem;
    flex:1;
    text-align:center;
  }

  input[type="range"] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
    flex:5;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: ${props => props.theme.resultContainer};
    border-radius: 1.3px;
    border: 0.2px solid #fff;
  }
  input[type="range"]::-webkit-slider-thumb {
    border: 1px solid #ffffff;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${props => props.theme.buttonBG};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: ${props => props.theme.resultContainer};
    /**${props => props.theme.buttonBG}; */
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: ${props => props.theme.resultContainer};
    border-radius: 1.3px;
    border: 0.2px solid #fff;
  }
  input[type="range"]::-moz-range-thumb {
    border: 1px solid #fff;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: ${props => props.theme.resultContainer};
    border: 0.2px solid #fff;
    border-radius: 2.6px;
  }
  input[type="range"]::-ms-fill-upper {
    background: ${props => props.theme.resultContainer};
    border: 0.2px solid #fff;
    border-radius: 2.6px;
  }
  input[type="range"]::-ms-thumb {
    border: 1px solid #fff;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: ${props => props.theme.resultContainer};
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: ${props => props.theme.resultContainer};
  }
`;

export default function Slider(props) {
  //const [passwordLength, setPasswordLength] = useState(20);

  return (
    <SliderStyles>
      <label>Length</label>
      <input
        className="slider"
        type="range"
        min="4"
        max="20"
        value={props.count}
        onChange={e => props.parentCallback(e.target.value)}
      />
      <p>{props.count}</p>
    </SliderStyles>
  );
}
