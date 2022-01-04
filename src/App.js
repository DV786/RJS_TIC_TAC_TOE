import React, { useState } from "react";
import Icon from "./componets/icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  // const winCondition = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [2, 4, 6],
  //   [0, 4, 8],
  // ];
  // const checkWinner = () => {
  //   let emptySquare = false;
  //   let isWinning = false;
  //   let currentCondition;
  //   let winningSide;

  //   for (let i = 0; i < winCondition.length; i++) {
  //     currentCondition = winCondition[i];
  //     if (
  //       itemArray[currentCondition[0]] !== "empty" &&
  //       itemArray[currentCondition[0]] === itemArray[currentCondition[1]] &&
  //       itemArray[currentCondition[0]] === itemArray[currentCondition[2]]
  //     ) {
  //       isWinning = true;
  //       winningSide = itemArray[currentCondition[0]];
  //     }
  //   }
  //   if (isWinning) {
  //     setWinMessage(
  //       winningSide === "cross" ? "cross win the game" : "circle win the game"
  //     );
  //   }

  //   itemArray.forEach((e) => {
  //     if (e === "empty") emptySquare = true;
  //   });
  //   if (!emptySquare) {
  //     setWinMessage("Draw");
  //   }
  // };

  const checkWinner = () => {
    let emptySquare = false;
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} WIN THE GAME`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} WIN THE GAME`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} WIN THE GAME`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} WIN THE GAME`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} WIN THE GAME`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} WIN THE GAME`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} WIN THE GAME`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} WIN THE GAME`);
    } else {
      itemArray.forEach((e) => {
        if (e === "empty") emptySquare = true;
      });
      if (!emptySquare) {
        setWinMessage("Draw match");
      }
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
      return toast("Allready Filled", { type: "error" });
    }
    checkWinner();
  };

  return (
    <Container className="p-5">
      <h1 className="mb-4 text-white">TIC-TAC-TOE GAME</h1>
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-4 mt-4">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button
                className="btn"
                color="success"
                block
                onClick={reloadGame}
              >
                Reload Game
              </Button>
            </div>
          ) : (
            <div>
              <h1 className="text-center text-warning">
                {isCross ? "Cross" : "Circle"} turn
              </h1>
            </div>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
