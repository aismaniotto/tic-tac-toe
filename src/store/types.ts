/**
 * actions types
 */
export enum GameTypes {
  RESET_GAME = "@game/RESET_GAME",
  CLEAN_GAME = "@game/CLEAN_GAME",
  PLAY_IN = "@game/PLAY_IN",
  CHECK_STATUS = "@game/CHECK_STATUS",
  NEXT_TURN = "@game/NEXT_TURN",
}

/**
 * data types
 */
export enum Player {
  X = "X",
  O = "O",
  None = "",
}

export enum Tile {
  Tile0x0 = 2,
  Tile0x1 = 7,
  Tile0x2 = 6,
  Tile1x0 = 9,
  Tile1x1 = 5,
  Tile1x2 = 1,
  Tile2x0 = 4,
  Tile2x1 = 3,
  Tile2x2 = 8,
}

export enum Status {
  PlayerOWin,
  PlayerXWin,
  ItsATie,
  InProgress,
}

/**
 * state type
 */
export interface GameState {
  readonly scoreX: number;
  readonly scoreY: number;
  readonly status: Status;
  readonly currentPlayer: Player;
  readonly tile0x0: Player;
  readonly tile0x1: Player;
  readonly tile0x2: Player;
  readonly tile1x0: Player;
  readonly tile1x1: Player;
  readonly tile1x2: Player;
  readonly tile2x0: Player;
  readonly tile2x1: Player;
  readonly tile2x2: Player;
}
