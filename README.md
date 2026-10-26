# Tic-Tac-Toe

A two-player tic-tac-toe game built with React. Players take turns as circle and cross on a 3x3 board; the game announces a winner or a draw and can be reset with one click.

## Features

- Two players on one screen, circle goes first
- Turn indicator ("Circle Turn" / "Cross Turn")
- Win detection across all 8 lines (rows, columns, diagonals)
- Draw detection when the board fills with no winner
- Toast messages for an already-filled cell and for clicks after the game has ended
- "Reload Game" button to start over once the game ends

## Tech stack

| Area | Library |
| --- | --- |
| UI | React 19 |
| Build tooling | Create React App (`react-scripts` 5) |
| Layout and components | Bootstrap 5, reactstrap 9 |
| Icons | react-icons 5 |
| Notifications | react-toastify 11 |
| Tests | Jest, React Testing Library 16 |

## Getting started

### Prerequisites

- Node.js (developed and tested on Node 24)
- npm

### Install and run

```bash
git clone https://github.com/DV786/RJS_TIC_TAC_TOE.git
cd RJS_TIC_TAC_TOE
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000) and reloads when you edit a file.

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Runs the development server |
| `npm test` | Runs the tests in watch mode |
| `npm test -- --watchAll=false` | Runs the tests once |
| `npm run build` | Creates a production build in `build/` |
| `npm run eject` | Ejects from Create React App (one-way, not recommended) |

## Project structure

```
public/                 Static HTML shell, manifest, robots.txt
src/
  index.js              Entry point: createRoot, ToastContainer, StrictMode
  App.js                Game board, turn handling, win/draw logic
  App.css               Board and button styling
  App.test.js           Game tests
  componets/icon.js     Renders the circle, cross or empty-cell icon
  reportWebVitals.js    Optional performance reporting
  setupTests.js         Jest and jest-dom setup
```

## How the game works

The board is an array of 9 cells, each `"empty"`, `"circle"` or `"cross"`. Clicking an empty cell fills it for the current player and passes the turn. After each move the app checks the 8 winning lines. If none is complete and no cell is empty, the game is a draw. Once the game ends, further clicks only show a toast until **Reload Game** is pressed.

## Testing

`src/App.test.js` covers the initial render, alternating turns, filled-cell clicks, circle and cross wins, a draw, locking after a win, and resetting the board.

```bash
npm test -- --watchAll=false
```

## Contributing

1. Create a branch from `main`.
2. Make your change and run `npm test -- --watchAll=false` and `npm run build`.
3. Open a pull request.

## Notes

- Create React App is no longer maintained. Most remaining `npm audit` findings come from its build tooling and do not ship in the built app. Moving to Vite would remove them.
- The board state lives in a module-level array in `App.js` rather than in React state. The tests reset it between runs.
