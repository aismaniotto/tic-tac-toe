import React from "react";
import "../styles/Tile.css";

interface Props {
  text?: any;
  className?: string;
}

const Tile: React.FC<Props> = (props: Props) => {
  return <div className={`tile ${props.className}`}>{props.text}</div>;
};

export default Tile;
