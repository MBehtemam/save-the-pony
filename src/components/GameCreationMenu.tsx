import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "../layouts/Grid/Row.styled";
import Col from "../layouts/Grid/Col.styled";
import InputController from "../layouts/Form/InputControl";
import ICustomGame from "../logic/Interfaces/ICustomGame";
import IPony from "../logic/Interfaces/IPony";
import PonyButton from "./PonyButton";
import * as CustomGameActions from "../logic/Actions/CustomGameActions";
import BigButton from "../layouts/components/Buttons/BigButton";

interface IProps {
  customGameSetHeight: Function;
  customGameSetWidth: Function;
  customGameSetPonyName: Function;
  createCustomGame: Function;
  customGame: ICustomGame;
  ponies: IPony[];
}
class GameCreationMenu extends Component<IProps> {
  render() {
    const {
      customGame,
      customGameSetWidth,
      customGameSetHeight,
      customGameSetPonyName,
      createCustomGame,
      ponies
    } = this.props;
    return (
      <Row horizontalAlign="center" verticalAlign="center" direction="column">
        <Row verticalAlign="center" horizontalAlign="center">
          <Col>
            <span>My pony is lost in </span>
          </Col>
        </Row>
        <Row direction="row" verticalAlign="center" horizontalAlign="center">
          <Col size={2}>
            <InputController>
              <label>Width</label>
              <input
                type="number"
                min="15"
                max="25"
                defaultValue={customGame.width.toString()}
                onChange={e => customGameSetWidth(e.target.value)}
              />
            </InputController>
          </Col>
          <Col size={2}>
            <InputController>
              <label>Height</label>
              <input
                type="number"
                min="15"
                max="25"
                defaultValue={customGame.height.toString()}
                onChange={e => customGameSetHeight(e.target.value)}
              />
            </InputController>
          </Col>
        </Row>
        <Row verticalAlign="center" horizontalAlign="center">
          <Col>
            <span>Pony Selector</span>
          </Col>
          <Row horizontalAlign="space-around">
            {ponies.map((pony: IPony) => (
              <Col
                size={3}
                key={pony.ponyName}
                verticalAlign="center"
                horizontalAlign="center"
              >
                <PonyButton
                  onClick={() => customGameSetPonyName(pony.ponyName)}
                  className={
                    pony.ponyName === customGame.ponyName ? "selected" : ""
                  }
                >
                  <img
                    src={require(`../assets/images/ponies/${pony.ponySprite}`)}
                  />
                </PonyButton>
              </Col>
            ))}
          </Row>
        </Row>
        <Row verticalAlign="center" horizontalAlign="center">
          <Col>
            <BigButton onClick={() => createCustomGame()}>
              <span>Create a Game</span>
            </BigButton>
          </Col>
        </Row>
      </Row>
    );
  }
}

const mapStateToProps = (state: any) => ({
  customGame: state.customGame,
  ponies: state.ponies
});
const mapDispatchToProps = (dispatch: Function) => ({
  customGameSetHeight: (height: number) =>
    dispatch(CustomGameActions.customGameSetHeight(height)),
  customGameSetWidth: (width: number) =>
    dispatch(CustomGameActions.customGameSetWidth(width)),
  customGameSetPonyName: (ponyName: string) =>
    dispatch(CustomGameActions.customGameSetPonyName(ponyName)),
  createCustomGame: () => dispatch(CustomGameActions.createCustomGame())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCreationMenu);
