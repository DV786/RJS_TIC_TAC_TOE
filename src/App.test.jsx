import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// `game` renders a fresh game and gives the test the nine cells and a
// `play(...indexes)` helper that clicks them in order.
const game = (name, run) =>
  test(name, () => {
    render(<App />);
    const cells = screen.getAllByRole("button", { name: /^Cell/ });
    const play = (...indexes) =>
      indexes.forEach((i) => fireEvent.click(cells[i]));

    run({ cells, play });
  });

game("renders the title, an empty 3x3 board and the first turn", ({ cells }) => {
  expect(screen.getByText("TIC-TAC-TOE")).toBeInTheDocument();
  expect(cells).toHaveLength(9);
  expect(screen.getByText("Circle Turn")).toBeInTheDocument();
  expect(screen.queryByText("Play again")).not.toBeInTheDocument();
});

game("alternates turns between circle and cross", ({ play }) => {
  play(0);
  expect(screen.getByText("Cross Turn")).toBeInTheDocument();

  play(1);
  expect(screen.getByText("Circle Turn")).toBeInTheDocument();
});

game("ignores a click on an already filled cell", ({ play }) => {
  play(0, 0);

  expect(screen.getByText("Cross Turn")).toBeInTheDocument();
  expect(screen.getByRole("status")).toHaveTextContent("Already filled");
});

game("announces circle as the winner and offers a reload", ({ play }) => {
  // circle: 0, 1, 2 (top row) - cross: 3, 4
  play(0, 3, 1, 4, 2);

  expect(screen.getByText("CIRCLE WINS")).toBeInTheDocument();
  expect(screen.getByText("Play again")).toBeInTheDocument();
});

game("announces cross as the winner", ({ play }) => {
  // cross: 3, 4, 5 (middle row) - circle: 0, 1, 8
  play(0, 3, 1, 4, 8, 5);

  expect(screen.getByText("CROSS WINS")).toBeInTheDocument();
});

game("announces a draw when the board fills with no winner", ({ play }) => {
  // O X O
  // O X X
  // X O O
  play(0, 1, 2, 4, 3, 5, 7, 6, 8);

  expect(screen.getByText("Draw match")).toBeInTheDocument();
});

game("stops accepting moves once the game is won", ({ play }) => {
  play(0, 3, 1, 4, 2); // circle wins
  play(5, 6);

  expect(screen.getByText("CIRCLE WINS")).toBeInTheDocument();
  expect(screen.getByRole("status")).toHaveTextContent("Game over");
});

game("Play again resets the board and the turn", ({ play }) => {
  play(0, 3, 1, 4, 2);
  fireEvent.click(screen.getByText("Play again"));

  expect(screen.getByText("Circle Turn")).toBeInTheDocument();
  expect(screen.queryByText("CIRCLE WINS")).not.toBeInTheDocument();
  expect(screen.queryByText("Play again")).not.toBeInTheDocument();

  // the previously used cell is playable again
  play(0);
  expect(screen.getByText("Cross Turn")).toBeInTheDocument();
});
