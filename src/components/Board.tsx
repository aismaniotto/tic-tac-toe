import React, { useState, useEffect } from "react";
import "../styles/Board.css";
import Row from "./Row";
import TileComponent from "./Tile";
import { Player, Tile, Status } from "../Game/types";
import swal from "sweetalert";

const Board: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState(Player.X);

  const [tile0x0, setTile0x0] = useState(Player.None);
  const [tile0x1, setTile0x1] = useState(Player.None);
  const [tile0x2, setTile0x2] = useState(Player.None);
  const [tile1x0, setTile1x0] = useState(Player.None);
  const [tile1x1, setTile1x1] = useState(Player.None);
  const [tile1x2, setTile1x2] = useState(Player.None);
  const [tile2x0, setTile2x0] = useState(Player.None);
  const [tile2x1, setTile2x1] = useState(Player.None);
  const [tile2x2, setTile2x2] = useState(Player.None);

  const canPlayHere = (tile: Tile) => {
    switch (tile) {
      case Tile.Tile0x0:
        return tile0x0 === Player.None;
      case Tile.Tile0x1:
        return tile0x1 === Player.None;
      case Tile.Tile0x2:
        return tile0x2 === Player.None;
      case Tile.Tile1x0:
        return tile1x0 === Player.None;
      case Tile.Tile1x1:
        return tile1x1 === Player.None;
      case Tile.Tile1x2:
        return tile1x2 === Player.None;
      case Tile.Tile2x0:
        return tile2x0 === Player.None;
      case Tile.Tile2x1:
        return tile2x1 === Player.None;
      case Tile.Tile2x2:
        return tile2x2 === Player.None;
    }
  };

  const playHere = (currentPlayer: Player, tile: Tile) => {
    if (!canPlayHere(tile)) {
      return;
    }

    switch (tile) {
      case Tile.Tile0x0:
        setTile0x0(currentPlayer);
        break;
      case Tile.Tile0x1:
        setTile0x1(currentPlayer);
        break;
      case Tile.Tile0x2:
        setTile0x2(currentPlayer);
        break;
      case Tile.Tile1x0:
        setTile1x0(currentPlayer);
        break;
      case Tile.Tile1x1:
        setTile1x1(currentPlayer);
        break;
      case Tile.Tile1x2:
        setTile1x2(currentPlayer);
        break;
      case Tile.Tile2x0:
        setTile2x0(currentPlayer);
        break;
      case Tile.Tile2x1:
        setTile2x1(currentPlayer);
        break;
      case Tile.Tile2x2:
        setTile2x2(currentPlayer);
        break;
    }
    var status = checkCurrentStatus();

    if (status === Status.ItsATie) {
      swal("It's a tie!").then(() => resetTiles());
    } else if (status === Status.PlayerOWin) {
      swal("Player O is the winner!").then(() => resetTiles());
    } else if (status === Status.PlayerXWin) {
      swal("Player X is the winner!").then(() => resetTiles());
    }

    setCurrentPlayer(currentPlayer === Player.O ? Player.X : Player.O);
  };

  const checkCurrentStatus = () => {
    const gameTiles: Array<number> = [
      tile0x0 === Player.O ? -1 : tile0x0 === Player.X ? 1 : 0,
      tile0x1 === Player.O ? -1 : tile0x1 === Player.X ? 1 : 0,
      tile0x2 === Player.O ? -1 : tile0x2 === Player.X ? 1 : 0,
      tile1x0 === Player.O ? -1 : tile1x0 === Player.X ? 1 : 0,
      tile1x1 === Player.O ? -1 : tile1x1 === Player.X ? 1 : 0,
      tile1x2 === Player.O ? -1 : tile1x2 === Player.X ? 1 : 0,
      tile2x0 === Player.O ? -1 : tile2x0 === Player.X ? 1 : 0,
      tile2x1 === Player.O ? -1 : tile2x1 === Player.X ? 1 : 0,
      tile2x2 === Player.O ? -1 : tile2x2 === Player.X ? 1 : 0,
    ];

    const tilesFromCurrentPlayer: Array<number> = [
      tile0x0 === currentPlayer ? Tile.Tile0x0 : 0,
      tile0x1 === currentPlayer ? Tile.Tile0x1 : 0,
      tile0x2 === currentPlayer ? Tile.Tile0x2 : 0,
      tile1x0 === currentPlayer ? Tile.Tile1x0 : 0,
      tile1x1 === currentPlayer ? Tile.Tile1x1 : 0,
      tile1x2 === currentPlayer ? Tile.Tile1x2 : 0,
      tile2x0 === currentPlayer ? Tile.Tile2x0 : 0,
      tile2x1 === currentPlayer ? Tile.Tile2x1 : 0,
      tile2x2 === currentPlayer ? Tile.Tile2x2 : 0,
    ];

    if (
      tilesFromCurrentPlayer[0] +
        tilesFromCurrentPlayer[1] +
        tilesFromCurrentPlayer[2] ===
      15
    ) {
      return currentPlayer === Player.O ? Status.PlayerOWin : Status.PlayerXWin;
    } else if (
      tilesFromCurrentPlayer[3] +
        tilesFromCurrentPlayer[4] +
        tilesFromCurrentPlayer[5] ===
      15
    ) {
      return currentPlayer === Player.O ? Status.PlayerOWin : Status.PlayerXWin;
    } else if (
      tilesFromCurrentPlayer[6] +
        tilesFromCurrentPlayer[7] +
        tilesFromCurrentPlayer[8] ===
      15
    ) {
      return currentPlayer === Player.O ? Status.PlayerOWin : Status.PlayerXWin;
    } else if (
      tilesFromCurrentPlayer[0] +
        tilesFromCurrentPlayer[3] +
        tilesFromCurrentPlayer[6] ===
      15
    ) {
      return currentPlayer === Player.O ? Status.PlayerOWin : Status.PlayerXWin;
    } else if (
      tilesFromCurrentPlayer[1] +
        tilesFromCurrentPlayer[4] +
        tilesFromCurrentPlayer[7] ===
      15
    ) {
      return currentPlayer === Player.O ? Status.PlayerOWin : Status.PlayerXWin;
    } else if (
      tilesFromCurrentPlayer[2] +
        tilesFromCurrentPlayer[5] +
        tilesFromCurrentPlayer[8] ===
      15
    ) {
      return currentPlayer === Player.O ? Status.PlayerOWin : Status.PlayerXWin;
    } else if (
      tilesFromCurrentPlayer[0] +
        tilesFromCurrentPlayer[4] +
        tilesFromCurrentPlayer[8] ===
      15
    ) {
      return currentPlayer === Player.O ? Status.PlayerOWin : Status.PlayerXWin;
    } else if (
      tilesFromCurrentPlayer[2] +
        tilesFromCurrentPlayer[4] +
        tilesFromCurrentPlayer[6] ===
      15
    ) {
      return currentPlayer === Player.O ? Status.PlayerOWin : Status.PlayerXWin;
    }

    if (gameTiles.filter((x) => x === 0).length === 0) return Status.ItsATie;

    return Status.InProgress;
  };

  const resetTiles = () => {
    setTile0x0(Player.None);
    setTile0x1(Player.None);
    setTile0x2(Player.None);
    setTile1x0(Player.None);
    setTile1x1(Player.None);
    setTile1x2(Player.None);
    setTile2x0(Player.None);
    setTile2x1(Player.None);
    setTile2x2(Player.None);
  };

  return (
    <div className="board">
      <Row>
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile0x0)}
          playerTile={tile0x0}
          className="board__tile--top-left"
        />
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile0x1)}
          playerTile={tile0x1}
          className="board__tile--top"
        />
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile0x2)}
          playerTile={tile0x2}
          className="board__tile--top-right"
        />
      </Row>
      <Row>
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile1x0)}
          playerTile={tile1x0}
          className="board__tile--left"
        />
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile1x1)}
          playerTile={tile1x1}
          className="board__tile"
        />
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile1x2)}
          playerTile={tile1x2}
          className="board__tile--right"
        />
      </Row>
      <Row>
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile2x0)}
          playerTile={tile2x0}
          className="board__tile--bottom-left"
        />
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile2x1)}
          playerTile={tile2x1}
          className="board__tile--bottom"
        />
        <TileComponent
          onClick={() => playHere(currentPlayer, Tile.Tile2x2)}
          playerTile={tile2x2}
          className="board__tile--bottom-right"
        />
      </Row>
    </div>
  );
};

export default Board;
