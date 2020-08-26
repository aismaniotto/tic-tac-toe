import React from "react";
import "../styles/Tile.css";
import { Player } from "../store/types";

interface Props {
  onClick?: () => void;
  playerTile?: Player;
  className?: string;
}

const Tile: React.FC<Props> = (props: Props) => {
  const { className, playerTile = Player.None, onClick = () => null } = props;

  return (
    <div className={`tile ${className}`} onClick={() => onClick()}>
      {playerTile}
    </div>
  );
};

export default Tile;
