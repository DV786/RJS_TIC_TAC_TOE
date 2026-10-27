import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import StatusBar from "./components/StatusBar";

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
      return setNotice("Game over - Press Play again");
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
    <main className="flex min-h-dvh flex-col items-center gap-4 px-4 py-8">
      <Header />
      <ScoreBoard />
      <Board board={board} onCellClick={changeItem} />
      <StatusBar 
        status={winMessage || (isCross ? "Cross Turn" : "Circle Turn")}
        notice={notice}
      />
      {winMessage && (
        <button
          type="button"
          onClick={reloadGame}
          className="cursor-pointer rounded-md bg-btn px-5 py-2 text-[13px] font-medium text-btn-ink hover:opacity-90"
        >
          Play again
        </button>
      )}
    </main>
  );
};

export default App;
