import styled from "styled-components";
import ITheme from "../layouts/theme/ITheme";

const Hud = styled.header`
  display: flex;
  height: 48px;
  padding-right: 10px;
  padding-left: 10px;
  border-top-left-radius: ${props =>
    props.theme.size.borderRadius || "inherit"};
  border-top-right-radius: ${props =>
    props.theme.size.borderRadius || "inherit"};
  background-color: ${props => props.theme.colors.hudBackgroundColor};
  align-items: center;
  justify-content: space-between;
`;
export default Hud;
