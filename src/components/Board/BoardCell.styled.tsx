import styled from "styled-components";
import ITheme from "../../layouts/theme/ITheme";

interface IBoardCell {
  backgroundColor: string;
  size: string;
  theme: ITheme;
}
const BoardCell = styled.div<IBoardCell>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 ${props => props.size + "%"};
  padding-top: ${props => props.size + "%"};
  background-color: ${props =>
    props.backgroundColor === "dark"
      ? props.theme.colors.boardCellColors[0]
      : props.theme.colors.boardCellColors[1]};
  &.wall {
    background-color: yellow;
  }
  &.can_select:hover {
    cursor: pointer;
  }
  &.can_not_select:hover {
    cursor: not-allowed;
  }
  img {
    width: 90%;
    height: 90%;
  }
`;
export default BoardCell;
