import React from "react";
import "../styles/Game.css";
import Board from "./Board";

function Game() {
  document.title = "Jogo da Velha";
  return (
    <div className="game">
      <Board />
    </div>
  );
}

export default Game;
