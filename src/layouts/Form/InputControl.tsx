import styled from "styled-components";
import ITheme from "../theme/ITheme";

interface IInputControl {
  theme: ITheme;
}
const InputControl = styled.div<IInputControl>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Pacifico", cursive;
  input {
    background-color: ${props => props.theme.colors.inputBgColor || "inherit"};
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.inputBorderColor || "inherit"};
    color: ${props => props.theme.colors.inputTextColor || "inherit"};
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: 50%;
    font-family: "Pacifico", cursive;
    font-size: 1.3em;
  }
`;

export default InputControl;
