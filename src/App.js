import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Icon from "./componets/icon";
import { toast } from "react-toastify";
import { Card, CardBody, Container, Col, Row } from "reactstrap";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const winGameCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkWinner = (winningCombinations) => {
    const checkCombination = (a, b, c) => a !== "empty" && a === b && b === c;
  
    for (const combination of winningCombinations) {
      const [x, y, z] = combination;
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
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled", { type: "error" });
    }
    checkWinner(winGameCondition);
  };
  
  return (
    <Container className="p-5">
      <div className="game-title">
        <h3 className="title-heading">TIC-TAC-TOE GAME</h3>
      </div>
      {
        winMessage &&
        <div className="main-btn">
          <button
            className="reload-game-btn"
            onClick={reloadGame}
          >
            Reload Game
          </button>
        </div>
      }
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" key={index} onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="offset-md-3">
          <h1 className="text-center text-warning">
            {
              winMessage ? winMessage : isCross ? "Cross Turn" : "Circle Turn"
            }
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default App;