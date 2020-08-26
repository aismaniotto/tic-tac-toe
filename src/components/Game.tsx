import React from "react";
import "../styles/Game.css";
import Board from "./Board";
import { GameState } from "../store/types";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as GameAction from "../store/actions";
import ScoreBoard from "./ScoreBoard";

interface DispatchProps {
  resetGame(): void;
}

type Props = GameState & DispatchProps;

const Game: React.FC<Props> = (props: Props) => {
  const { scoreX, scoreO, resetGame } = props;

  document.title = "Jogo da Velha";
  return (
    <div className="game">
      <ScoreBoard
        scorePlayerX={scoreX}
        scorePlayerO={scoreO}
        resetScore={resetGame}
      />
      <Board />
    </div>
  );
};

function mapStateToProps(state: GameState) {
  return state;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GameAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
