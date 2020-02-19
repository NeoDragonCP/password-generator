import styled from "styled-components";

const Setting = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 1rem;

  input[type="checkbox"] {
    margin-left: 1rem;
    /* Double-sized Checkboxes 
    -ms-transform: scale(2);
    -moz-transform: scale(2);
    -webkit-transform: scale(2);
    -o-transform: scale(2); 
    transform: scale(2);
    */
    padding: 10px;

    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;

    border: 1px solid #fff;
    border-radius: ${props => props.theme.buttonBorderRadius};
    outline: none;
    transition-duration: 0.3s;
    background-color: ${props => props.theme.resultContainer};

    :checked {
      background-color: ${props => props.theme.buttonBG};
    }

    :active {
      border: 2px solid ${props => props.theme.buttonBG};
    }
  }
`;

export default Setting;
