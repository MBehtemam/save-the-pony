import styled from "styled-components";
import ITheme from "../theme/ITheme";
interface IAlert {
  type: "success" | "danger" | "warning" | "normal";
  theme: ITheme;
}
const Alert = styled.div<IAlert>`
  padding-top: 5px;
  padding-bottom: 5px;
  border-width: 2px;
  border-style: solid;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: ${props => {
    if (props.type === "danger") {
      return props.theme.colors.errorDarken;
    } else if (props.type === "success") {
      return props.theme.colors.successDarken;
    } else if (props.type === "warning") {
      return props.theme.colors.warningDarken;
    } else {
      return props.theme.colors.tertiary;
    }
  }};
  background-color: ${props => {
    if (props.type === "danger") {
      return props.theme.colors.error;
    } else if (props.type === "success") {
      return props.theme.colors.success;
    } else if (props.type === "warning") {
      return props.theme.colors.warning;
    } else {
      return props.theme.colors.tertiary;
    }
  }};
`;
export default Alert;
