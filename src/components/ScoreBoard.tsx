import React from "react";
import "../styles/ScoreBoard.css";

interface Props {
  scorePlayerX: number;
  scorePlayerO: number;
  resetScore: () => void;
}

const ScoreBoard: React.FC<Props> = (props: Props) => {
  const { scorePlayerO, scorePlayerX, resetScore } = props;

  return (
    <div className="scoreBoard">
      <button className="scoreBoard--button" onClick={resetScore}>
        Reset
      </button>
      <h1>Player X: {scorePlayerX}</h1>
      <h1>Player O: {scorePlayerO}</h1>
    </div>
  );
};

export default ScoreBoard;
