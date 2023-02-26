import React, { useState } from "react";
import "../App.css";
import { ChessBoardRenderer } from "../renderBoard";

const ChessBoard = ({ size }) => {
  const [selectedCell, setSelectedCell] = useState({});

  return (
    <div className="chessboard">
      {ChessBoardRenderer({ size, selectedCell, setSelectedCell })}

      <button
        className="resetBtn"
        onClick={() => {
          setSelectedCell({});
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ChessBoard;
