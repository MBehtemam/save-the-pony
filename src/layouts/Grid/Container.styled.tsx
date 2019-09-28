import styled, { withTheme } from "styled-components";
import ITheme from "../theme/ITheme";
interface IContainerProps {
  width?: string;
  direction?: "column" | "row";
  useBackground?: boolean;
  useBorderRadius?: boolean;
  theme: ITheme;
}
const container = styled.div<IContainerProps>`
  display: flex;
  width: ${props => props.width || "100%"};
  flex-direction: ${props => props.direction || "row"};
  border-top-right-radius: ${props =>
    props.useBorderRadius ? props.theme.size.borderRadius : "inherit"};
  border-top-left-radius: "";
  background-color: ${props =>
    props.useBackground ? props.theme.colors.containerBackground : "inherit"};
`;
export default container;
