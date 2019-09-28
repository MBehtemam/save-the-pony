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
class Page extends Component {
  render() {
    let colors = ["dark", "light"];
    const total = 100;
    const width = 10;
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
            if (total % 2 === 0 && index !== 0 && index % width === 0) {
              colors = colors.reverse();
            }
            return (
              <BoardCell
                key={index}
                size={(100 / width).toString()}
                backgroundColor={index % 2 === 0 ? colors[0] : colors[1]}
              ></BoardCell>
            );
          })}
        </BoardContainer>
      </Container>
    );
  }
}
export default Page;
