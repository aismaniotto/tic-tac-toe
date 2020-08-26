import { Reducer } from "redux";
import { GameState, GameTypes, Status, Player, Tile } from "./types";

const INITIAL_STATE: GameState = {
  scoreX: 0,
  scoreO: 0,
  status: Status.InProgress,
  currentPlayer: Player.X,
  tile0x0: Player.None,
  tile0x1: Player.None,
  tile0x2: Player.None,
  tile1x0: Player.None,
  tile1x1: Player.None,
  tile1x2: Player.None,
  tile2x0: Player.None,
  tile2x1: Player.None,
  tile2x2: Player.None,
};

const checkCurrentStatus = (gameState: GameState) => {
  const {
    currentPlayer,
    tile0x0,
    tile0x1,
    tile0x2,
    tile1x0,
    tile1x1,
    tile1x2,
    tile2x0,
    tile2x1,
    tile2x2,
  } = gameState;
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

const reducer: Reducer<GameState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameTypes.RESET_GAME:
      return INITIAL_STATE;

    case GameTypes.CLEAN_GAME:
      return {
        ...state,
        tile0x0: Player.None,
        tile0x1: Player.None,
        tile0x2: Player.None,
        tile1x0: Player.None,
        tile1x1: Player.None,
        tile1x2: Player.None,
        tile2x0: Player.None,
        tile2x1: Player.None,
        tile2x2: Player.None,
      };

    case GameTypes.PLAY_IN:
      switch (action.payload) {
        case Tile.Tile0x0:
          if (state.tile0x0 === Player.None) {
            return { ...state, tile0x0: state.currentPlayer };
          } else {
            return state;
          }
        case Tile.Tile0x1:
          if (state.tile0x1 === Player.None) {
            return { ...state, tile0x1: state.currentPlayer };
          } else {
            return state;
          }
        case Tile.Tile0x2:
          if (state.tile0x2 === Player.None) {
            return { ...state, tile0x2: state.currentPlayer };
          } else {
            return state;
          }
        case Tile.Tile1x0:
          if (state.tile1x0 === Player.None) {
            return { ...state, tile1x0: state.currentPlayer };
          } else {
            return state;
          }
        case Tile.Tile1x1:
          if (state.tile1x1 === Player.None) {
            return { ...state, tile1x1: state.currentPlayer };
          } else {
            return state;
          }
        case Tile.Tile1x2:
          if (state.tile1x2 === Player.None) {
            return { ...state, tile1x2: state.currentPlayer };
          } else {
            return state;
          }
        case Tile.Tile2x0:
          if (state.tile2x0 === Player.None) {
            return { ...state, tile2x0: state.currentPlayer };
          } else {
            return state;
          }
        case Tile.Tile2x1:
          if (state.tile2x1 === Player.None) {
            return { ...state, tile2x1: state.currentPlayer };
          } else {
            return state;
          }
        case Tile.Tile2x2:
          if (state.tile2x2 === Player.None) {
            return { ...state, tile2x2: state.currentPlayer };
          } else {
            return state;
          }
        default:
          return state;
      }

    case GameTypes.CHECK_STATUS:
      const status = checkCurrentStatus(state);
      return {
        ...state,
        status: status,
        scoreX: status === Status.PlayerXWin ? state.scoreX + 1 : state.scoreX,
        scoreO: status === Status.PlayerOWin ? state.scoreO + 1 : state.scoreO,
      };

    case GameTypes.NEXT_TURN:
      return {
        ...state,
        currentPlayer: state.currentPlayer === Player.X ? Player.O : Player.X,
      };

    default:
      return state;
  }
};

export default reducer;
