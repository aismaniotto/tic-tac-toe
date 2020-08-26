import React, { useEffect } from "react";
import "../styles/Board.css";
import Row from "./Row";
import TileComponent from "./Tile";
import { Tile, Status, GameState } from "../store/types";
import swal from "sweetalert";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import * as GameAction from "../store/actions";

interface DispatchProps {
  playIn(tile: Tile): void;
  cleanGame(): void;
  checkStatus(): void;
  nextTurn(): void;
}

type Props = GameState & DispatchProps;

const Board: React.FC<Props> = (props: Props) => {
  const {
    playIn,
    cleanGame,
    checkStatus,
    nextTurn,
    status,
    tile0x0,
    tile0x1,
    tile0x2,
    tile1x0,
    tile1x1,
    tile1x2,
    tile2x0,
    tile2x1,
    tile2x2,
  } = props;

  useEffect(() => {
    checkStatus();
    nextTurn();
  }, [
    tile0x0,
    tile0x1,
    tile0x2,
    tile1x0,
    tile1x1,
    tile1x2,
    tile2x0,
    tile2x1,
    tile2x2,
    checkStatus,
    nextTurn,
  ]);

  useEffect(() => {
    if (status === Status.ItsATie) {
      swal("It's a tie!").then(() => cleanGame());
    } else if (status === Status.PlayerOWin) {
      swal("Player O is the winner!").then(() => cleanGame());
    } else if (status === Status.PlayerXWin) {
      swal("Player X is the winner!").then(() => cleanGame());
    }
  }, [status, cleanGame]);

  return (
    <div className="board">
      <Row>
        <TileComponent
          onClick={() => playIn(Tile.Tile0x0)}
          playerTile={tile0x0}
          className="board__tile--top-left"
        />
        <TileComponent
          onClick={() => playIn(Tile.Tile0x1)}
          playerTile={tile0x1}
          className="board__tile--top"
        />
        <TileComponent
          onClick={() => playIn(Tile.Tile0x2)}
          playerTile={tile0x2}
          className="board__tile--top-right"
        />
      </Row>
      <Row>
        <TileComponent
          onClick={() => playIn(Tile.Tile1x0)}
          playerTile={tile1x0}
          className="board__tile--left"
        />
        <TileComponent
          onClick={() => playIn(Tile.Tile1x1)}
          playerTile={tile1x1}
          className="board__tile"
        />
        <TileComponent
          onClick={() => playIn(Tile.Tile1x2)}
          playerTile={tile1x2}
          className="board__tile--right"
        />
      </Row>
      <Row>
        <TileComponent
          onClick={() => playIn(Tile.Tile2x0)}
          playerTile={tile2x0}
          className="board__tile--bottom-left"
        />
        <TileComponent
          onClick={() => playIn(Tile.Tile2x1)}
          playerTile={tile2x1}
          className="board__tile--bottom"
        />
        <TileComponent
          onClick={() => playIn(Tile.Tile2x2)}
          playerTile={tile2x2}
          className="board__tile--bottom-right"
        />
      </Row>
    </div>
  );
};

function mapStateToProps(state: GameState) {
  return state;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GameAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
