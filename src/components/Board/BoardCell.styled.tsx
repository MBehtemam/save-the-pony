import styled from "styled-components";
import ITheme from "../../layouts/theme/ITheme";
import ParityEnum from "../../logic/Enums/ParityEnum";
interface IBoardCell {
  rowParity: ParityEnum;
  cellParity: ParityEnum;
  westBlock?: boolean;
  northBlock?: boolean;
  eastBlock?: boolean;
  southBlock?: boolean;
  size: string;
  theme: ITheme;
}
const BoardCell = styled.div<IBoardCell>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 calc(${props => props.size + "%"} - 8px);
  padding-top: ${props => props.size + "%"};

  border-top-color: ${props =>
    props.northBlock ? "red" : props.theme.colors.boardCellColors[0]};
  border-top-width: ${props => (props.northBlock ? "3px" : "3px")};

  border-bottom-color: ${props =>
    props.southBlock ? "red" : props.theme.colors.boardCellColors[0]};
  border-bottom-width: ${props => (props.southBlock ? "3px" : "3px")};

  border-right-color: ${props =>
    props.eastBlock ? "red" : props.theme.colors.boardCellColors[0]};
  border-right-width: ${props => (props.eastBlock ? "3px" : "3px")};

  border-left-color: ${props =>
    props.westBlock ? "red" : props.theme.colors.boardCellColors[0]};
  border-left-width: ${props => (props.westBlock ? "3px" : "3px")};

  border-style: solid;
  cursor: pointer;
  background-color: ${props => {
    return props.theme.colors.boardCellColors[0];
    // if (props.rowParity === ParityEnum.EVEN) {
    //   if (props.cellParity === ParityEnum.EVEN) {
    //     return props.theme.colors.boardCellColors[0];
    //   } else if (props.cellParity === ParityEnum.ODD) {
    //     return props.theme.colors.boardCellColors[1];
    //   }
    // } else if (props.rowParity === ParityEnum.ODD) {
    //   if (props.cellParity === ParityEnum.ODD) {
    //     return props.theme.colors.boardCellColors[0];
    //   } else if (props.cellParity === ParityEnum.EVEN) {
    //     return props.theme.colors.boardCellColors[1];
    //   }
    // }
  }};
  &:hover {
    background-color: ${props => props.theme.colors.boardCellColors[1]};
  }
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
