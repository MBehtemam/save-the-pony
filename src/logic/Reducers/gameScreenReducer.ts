import GameScreenEnum from "../Enums/GameScreenEnum";
import IAction from "../Interfaces/IAction";

export const initialState: GameScreenEnum = GameScreenEnum.MAIN;

const gameScreenReducer = (
  state: GameScreenEnum = initialState,
  action: IAction
): GameScreenEnum => {
  switch (action.type) {
    default:
      return state;
  }
};

export default gameScreenReducer;
