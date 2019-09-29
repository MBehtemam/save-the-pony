import React, { Component } from "react";
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
class Page extends Component {
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
    wallPositions: number[],
    endPointPosition: number
  ): string => {
    if (index === domokunPosition) {
      return "domokun";
    } else if (wallPositions.includes(index)) {
      return "wall";
    } else if (index === endPointPosition) {
      return "endpoint";
    }
    return "";
  };
  render() {
    const total = 625;
    const width = 25;
    const domokunPosition = 15;
    const ponyPosition = 10;
    const walls = [11, 5, 8];
    const endPoint = 50;
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
                className={this.getClassName(
                  index,
                  domokunPosition,
                  walls,
                  endPoint
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
export default Page;
