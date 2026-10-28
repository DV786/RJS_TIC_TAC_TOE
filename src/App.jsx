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
    <main 
      className="flex min-h-dvh flex-col items-center justify-center gap-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-[max(1.5rem,env(safe-area-inset-bottom))] py-6 sm:py-10 phone-landscape:py-4"
    >
    <div className="grid w-[min(100%,32rem,60dvh)] gap-4 md:gap-6 phone-landscape:w-full phone-landscape:max-w-3xl phone-landscape:grid-cols-[auto_1fr] phone-landscape:items-center phone-landscape:gap-x-6">
      <Header className="phone-landscape:col-start-2" />
      <ScoreBoard className="phone-landscape:col-start-2" />
      <Board 
        board={board} 
        onCellClick={changeItem}
        className="phone-landscape:col-start-1 phone-landscape:row-start-1 phone-landscape:row-span-4 phone-landscape:w-[calc(100dvh-2rem)]"
      />
      <StatusBar
        className="phone-landscape:col-start-2"
        status={winMessage || (isCross ? "Cross Turn" : "Circle Turn")}
        notice={notice}
      />
      {winMessage && (
        <button
          type="button"
          onClick={reloadGame}
          className="cursor-pointer justify-self-center rounded-md bg-btn px-5 min-h-11 text-[13px] font-medium text-btn-ink hover:opacity-90 phone-landscape:col-start-2 phone-landscape:justify-self-stretch"
        >
          Play again
        </button>
      )}
    </div>
    </main>
  );
};

export default App;
