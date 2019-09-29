import React from "react";
import {
  BrowserRouter as MainRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import GameScreenEnum from "../logic/Enums/GameScreenEnum";
import MainScreen from "./Main";
import GameScreen from "./Game";
interface IProps {
  gameScreen: GameScreenEnum;
}
const Router = (props: IProps) => (
  <MainRouter>
    <Switch>
      {props.gameScreen === GameScreenEnum.MAIN && (
        <Route component={MainScreen} />
      )}
      {props.gameScreen === GameScreenEnum.GAME && (
        <Route component={GameScreen} />
      )}
    </Switch>
  </MainRouter>
);

const mapStateToProps = (state: any) => ({
  gameScreen: state.gameScreen
});
const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
