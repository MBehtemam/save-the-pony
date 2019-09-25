import React from "react";
import Container from "../layouts/Grid/Container.styled";
import Header from "../components/Header";
import GameCreationMenu from "../components/GameCreationMenu";
class Main extends React.Component {
  render() {
    return (
      <Container useBackground={true} direction="column">
        <Header />
        <GameCreationMenu />
      </Container>
    );
  }
}
export default Main;
