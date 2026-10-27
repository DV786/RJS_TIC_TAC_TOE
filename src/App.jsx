import "./App.css";
import { useState } from "react";
import Icon from "./components/Icon";

const emptyBoard = () => new Array(9).fill("empty");

const winGameCondition = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const getResult = (board) => {
  for (const [x, y, z] of winGameCondition) {
    if (board[x] !== "empty" && board[x] === board[y] && board[y] === board[z]) {
      return `${board[x].toUpperCase()} WINS`;
    }
  }
  return board.includes("empty") ? "" : "Draw match";
};

const App = () => {
  const [board, setBoard] = useState(emptyBoard);
  const [notice, setNotice] = useState("");

  const winMessage = getResult(board);
  const isCross = board.filter((cell) => cell !== "empty").length % 2 === 1;

  const reloadGame = () => {
    setBoard(emptyBoard());
    setNotice("");
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return setNotice("Game over - press Reload Game");
    }

    if (board[itemNumber] !== "empty") {
      return setNotice("Already filled");
    }

    setBoard(board.map((cell, index) =>
      index === itemNumber ? (isCross ? "cross" : "circle") : cell
    ));
    setNotice("");
  };

  return (
    <main className="game">
      <h1 className="title-heading">TIC-TAC-TOE GAME</h1>
      {winMessage && (
        <button className="reload-game-btn" onClick={reloadGame}>
          Reload Game
        </button>
      )}
      <div className="grid">
        {board.map((item, index) => (
          <button
            type="button"
            className="cell"
            key={index}
            aria-label={`Cell ${index + 1}, ${item}`}
            onClick={() => changeItem(index)}
          >
            <Icon name={item} />
          </button>
        ))}
      </div>
      <p className="notice" role="status">{notice}</p>
      <h2 className="status">
        {winMessage ? winMessage : isCross ? "Cross Turn" : "Circle Turn"}
      </h2>
    </main>
  );
};

export default App;
