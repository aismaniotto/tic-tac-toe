import { action } from "typesafe-actions";
import { GameTypes, Tile } from "./types";

export const cleanGame = () => action(GameTypes.CLEAN_GAME);
export const resetGame = () => action(GameTypes.RESET_GAME);

export const playIn = (tile: Tile) => action(GameTypes.PLAY_IN, tile);

export const checkStatus = () => action(GameTypes.CHECK_STATUS);
export const nextTurn = () => action(GameTypes.NEXT_TURN);
