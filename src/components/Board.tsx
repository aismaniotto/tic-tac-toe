import React from "react";
import "../styles/Board.css";
import Row from "./Row";
import Tile from "./Tile";

const Board: React.FC = () => {
  return (
    <div className="board">
      <Row>
        <Tile text="X" className="board__tile--top-left" />
        <Tile text="O" className="board__tile--top" />
        <Tile text="X" className="board__tile--top-right" />
      </Row>
      <Row>
        <Tile text="O" className="board__tile--left" />
        <Tile text="X" className="board__tile" />
        <Tile text="O" className="board__tile--right" />
      </Row>
      <Row>
        <Tile text="X" className="board__tile--bottom-left" />
        <Tile text="O" className="board__tile--bottom" />
        <Tile text="X" className="board__tile--bottom-right" />
      </Row>
    </div>
  );
};

export default Board;
