import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "../layouts/Grid/Row.styled";
import Col from "../layouts/Grid/Col.styled";
import InputController from "../layouts/Form/InputControl";
import ICustomGame from "../logic/Interfaces/ICustomGame";
import IPony from "../logic/Interfaces/IPony";
import PonyButton from "./PonyButton";
import GingerPony from "../assets/images/ponies/Ginger_Gold.png";
import Twinkleshine from "../assets/images/ponies/Twinkleshine.png";
import * as CustomGameActions from "../logic/Actions/CustomGameActions";

interface IProps {
  customGameSetHeight: Function;
  customGameSetWidth: Function;
  customGameSetPonyName: Function;
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
      ponies
    } = this.props;
    return (
      <Row horizontalAlign="center" verticalAlign="center" direction="column">
        <Row verticalAlign="center" horizontalAlign="center">
          <Col>
            <span>My pony was lost in </span>
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
        <Row>
          <Col>
            <span>Pony Selector</span>
          </Col>
          <Row horizontalAlign="space-around">
            {ponies.map((pony: IPony) => (
              <Col size={3}>
                <PonyButton
                  onClick={() => customGameSetPonyName(pony.ponyName)}
                  className={
                    pony.ponyName === customGame.ponyName ? "selected" : ""
                  }
                >
                  <figure>
                    <img
                      src={require(`../assets/images/ponies/${pony.ponySprite}`)}
                    />
                  </figure>
                </PonyButton>
              </Col>
            ))}
          </Row>
        </Row>
        <Row>
          <Col>
            <button>Create a Game</button>
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
    dispatch(CustomGameActions.customGameSetPonyName(ponyName))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCreationMenu);
