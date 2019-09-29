import styled from "styled-components";
import ITheme from "../../layouts/theme/ITheme";
import ParityEnum from "../../logic/Enums/ParityEnum";
interface IBoardCell {
  rowParity: ParityEnum;
  cellParity: ParityEnum;
  size: string;
  theme: ITheme;
}
const BoardCell = styled.div<IBoardCell>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 ${props => props.size + "%"};
  padding-top: ${props => props.size + "%"};
  cursor: pointer;
  background-color: ${props => {
    if (props.rowParity === ParityEnum.EVEN) {
      if (props.cellParity === ParityEnum.EVEN) {
        return props.theme.colors.boardCellColors[0];
      } else if (props.cellParity === ParityEnum.ODD) {
        return props.theme.colors.boardCellColors[1];
      }
    } else if (props.rowParity === ParityEnum.ODD) {
      if (props.cellParity === ParityEnum.ODD) {
        return props.theme.colors.boardCellColors[0];
      } else if (props.cellParity === ParityEnum.EVEN) {
        return props.theme.colors.boardCellColors[1];
      }
    }
  }};
  &.wall {
    background-image: url(${require("../../assets/images/characters/wall.png")});
    background-color: orange;
    background-position: center;
    background-size: cover;
  }
  &.domokun {
    background-image: url(${require("../../assets/images/characters/domokun.png")});
    background-color: orange;
    background-position: center;
    background-size: cover;
  }
  &.endpoint {
    background-image: url(${require("../../assets/images/characters/door.png")});
    background-color: green;
    background-position: center;
    background-size: cover;
  }
  &.wall:hover,
  &.domokun:hover {
    cursor: not-allowed;
  }
  position: relative;
  img {
    width: 90%;
    height: 90%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
export default BoardCell;
