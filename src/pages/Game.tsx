import React, { Component } from "react";
import Container from "../layouts/Grid/Container.styled";
import Hud from "../components/Hud.styled";
import HudCharacter from "../components/HudCharacter.styled";
import HudStatus from "../components/HudStatus.styled";
import CircleStatus from "../layouts/components/CircleStatus/CircleStatus.styled";
import StatusEnum from "../logic/Enums/StatusEnum";
class Page extends Component {
  render() {
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
        <span>Hi I'm game</span>
      </Container>
    );
  }
}
export default Page;
