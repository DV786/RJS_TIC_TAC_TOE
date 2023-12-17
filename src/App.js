import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Icon from "./componets/icon";
import { ToastContainer, toast } from "react-toastify";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkWinner = () => {
    const checkCombination = (a, b, c) => {
      if (a !== "empty" && a === b && b === c) {
        setWinMessage(`${a.toUpperCase()} WINS`);
        return true;
      }
      return false;
    };

    if (
      checkCombination(itemArray[0], itemArray[1], itemArray[2]) ||
      checkCombination(itemArray[3], itemArray[4], itemArray[5]) ||
      checkCombination(itemArray[6], itemArray[7], itemArray[8]) ||
      checkCombination(itemArray[0], itemArray[3], itemArray[6]) ||
      checkCombination(itemArray[1], itemArray[4], itemArray[7]) ||
      checkCombination(itemArray[2], itemArray[5], itemArray[8]) ||
      checkCombination(itemArray[0], itemArray[4], itemArray[8]) ||
      checkCombination(itemArray[2], itemArray[4], itemArray[6])
    ) {
      return;
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
    checkWinner();
  };

  return (
    <Container className="p-5">
      <h1 className="mb-4 text-white">TIC-TAC-TOE GAME</h1>
      <ToastContainer position="top-right" />
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
          {
            winMessage && <Button
              className="m-0 w-100"
              color="success"
              size="sm"
              // block
              onClick={reloadGame}
            >
              Reload Game
            </Button>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default App;