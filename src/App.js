import ChessBoard from "./components/ChessBoard";

function App() {
  const size = 8;

  return (
    <div className="App">
      <div>
        <h1 className="header">Chessboard</h1>
      </div>

      <ChessBoard {...{ size }} />
    </div>
  );
}

export default App;
