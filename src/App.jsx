import "./App.css";
import { useState } from "react";
import Icon from "./components/Icon";

const itemArray = new Array(9).fill("empty");

const winGameCondition = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [notice, setNotice] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    setNotice("");
    itemArray.fill("empty", 0, 9);
  };

  const checkWinner = () => {
    const checkCombination = (a, b, c) => a !== "empty" && a === b && b === c;

    for (const [x, y, z] of winGameCondition) {
      if (checkCombination(itemArray[x], itemArray[y], itemArray[z])) {
        setWinMessage(`${itemArray[x].toUpperCase()} WINS`);
        return;
      }
    }

    if (!itemArray.includes("empty")) {
      setWinMessage("Draw match");
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return setNotice("Game over - press Reload Game");
    }

    if (itemArray[itemNumber] !== "empty") {
      return setNotice("Already filled");
    }

    itemArray[itemNumber] = isCross ? "cross" : "circle";
    setIsCross(!isCross);
    setNotice("");
    checkWinner();
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
        {itemArray.map((item, index) => (
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
