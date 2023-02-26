export const ChessBoardRenderer = ({ size, selectedCell, setSelectedCell }) => {
  const isCapturableByKnight = (x, y, a, b) => {
    const dx = Math.abs(x - a);
    const dy = Math.abs(y - b);
    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  };

  const isCapturable = (x, y, a, b) => {
    return isCapturableByKnight(x, y, a, b);
  };

  const handleCellClick = (x, y) => {
    setSelectedCell({ x, y });
  };

  const board = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const isWhite = (i + j) % 2 === 0;

      const isCapturableCell =
        selectedCell && isCapturable(selectedCell.x, selectedCell.y, i, j);

      row.push(
        <div
          key={`${i}-${j}`}
          className={`tile ${isWhite ? "white" : "black"} ${
            isCapturableCell && "capturable"
          } ${selectedCell.x === i && selectedCell.y === j && "selected"}`}
          onClick={() => handleCellClick(i, j)}
        />
      );
    }
    board.push(
      <div key={i} className="row">
        {row}
      </div>
    );
  }
  return board;
};
