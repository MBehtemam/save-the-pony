import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../layouts/Grid/Container.styled";
import Hud from "../components/Hud.styled";
import HudCharacter from "../components/HudCharacter.styled";
import HudStatus from "../components/HudStatus.styled";
import CircleStatus from "../layouts/components/CircleStatus/CircleStatus.styled";
import StatusEnum from "../logic/Enums/StatusEnum";
import NotificationBar from "../layouts/Typography/NotificationBar.styled";
import BoardContainer from "../components/Board/BoardContainer.styled";
import BoardCell from "../components/Board/BoardCell.styled";
import ParityEnum from "../logic/Enums/ParityEnum";
import IDomokun from "../logic/Interfaces/IDomokun";
import IEndPoint from "../logic/Interfaces/IEndPoint";
import IBoard from "../logic/Interfaces/IBoard";
import IPony from "../logic/Interfaces/IPony";

interface IState {
  walls: string[][];
  domokun: IDomokun;
  endPoint: IEndPoint;
  board: IBoard;
  pony: IPony;
}
interface IProps {}
class Page extends Component<IState, IProps> {
  getRowParity = (total: number, width: number, index: number): ParityEnum => {
    if (total % 2 !== 0) {
      return ParityEnum.EVEN;
    }
    const rowNumber = Math.floor(index / width);
    if (index < width) {
      return ParityEnum.EVEN;
    } else {
      return rowNumber % 2 === 0 ? ParityEnum.EVEN : ParityEnum.ODD;
    }
  };
  getCellParity = (total: number, width: number, index: number): ParityEnum => {
    return (index + width) % 2 === 0 ? ParityEnum.EVEN : ParityEnum.ODD;
  };
  getClassName = (
    index: number,
    domokunPosition: number,
    wallPositions: string[][],
    endPointPosition: number
  ): string => {
    if (index === domokunPosition) {
      return "domokun";
      // } else if (wallPositions.includes(index)) {
      //   return "wall";
    } else if (index === endPointPosition) {
      return "endpoint";
    }
    return "";
  };
  render() {
    const {
      walls,
      domokun: { position: domokunPosition },
      endPoint: { position: endPointPosition },
      pony: { ponyName, ponyPosition, ponySprite },
      board: { width, height, data }
    } = this.props;
    const total = width * height;
    return (
      <Container useBackground={true} useBorderRadius={true} direction="column">
        <Hud>
          <HudCharacter
            src={require("../assets/images/ponies/Twinkleshine.png")}
          />
          <HudStatus>
            <CircleStatus status={StatusEnum.NORMAL} />
          </HudStatus>
        </Hud>
        <NotificationBar>
          <span>I'm a Notification</span>
        </NotificationBar>
        <BoardContainer>
          {Array.from(Array(total).keys()).map((cell, index) => {
            return (
              <BoardCell
                key={index}
                size={(100 / width).toString()}
                rowParity={this.getRowParity(total, width, index)}
                cellParity={this.getCellParity(total, width, index)}
                northBlock={
                  walls && walls[index] && walls[index].includes("north")
                }
                westBlock={
                  walls && walls[index] && walls[index].includes("west")
                }
                eastBlock={
                  walls && walls[index] && walls[index].includes("east")
                }
                southBlock={
                  walls && walls[index] && walls[index].includes("south")
                }
                className={this.getClassName(
                  index,
                  domokunPosition,
                  walls,
                  endPointPosition
                )}
              >
                {index === ponyPosition && (
                  <img
                    src={require("../assets/images/ponies/Twinkleshine.png")}
                  />
                )}
              </BoardCell>
            );
          })}
        </BoardContainer>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => ({
  walls: state.walls,
  domokun: state.domokun,
  endPoint: state.endPoint,
  board: state.board,
  pony: state.pony
});
const mapDispatchToProps = (dispatch: Function) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
