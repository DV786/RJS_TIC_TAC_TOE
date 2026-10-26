# Tic-Tac-Toe

A two-player tic-tac-toe game built with React and Vite. Players take turns as circle and cross on a 3x3 board; the game announces a winner or a draw and can be reset with one click.

## Features

- Two players on one screen, circle goes first
- Turn indicator ("Circle Turn" / "Cross Turn")
- Win detection across all 8 lines (rows, columns, diagonals)
- Draw detection when the board fills with no winner
- Inline messages for an already-filled cell and for clicks after the game has ended
- "Reload Game" button to start over once the game ends
- Keyboard accessible: every cell is a real button with a label

## Tech stack

| Area | Tool |
| --- | --- |
| UI | React 19 |
| Build tooling | Vite |
| Styling | Plain CSS, inline SVG icons (no UI library) |
| Tests | Vitest, jsdom, React Testing Library |

The only runtime dependencies are `react` and `react-dom`.

## Getting started

### Prerequisites

- Node.js 22.12 or newer (developed and tested on Node 24)
- npm

### Install and run

```bash
git clone https://github.com/DV786/RJS_TIC_TAC_TOE.git
cd RJS_TIC_TAC_TOE
npm install
npm run dev
```

The app opens at [http://localhost:3000](http://localhost:3000) and reloads when you edit a file.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` (or `npm start`) | Runs the development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm test` | Runs the tests once |
| `npm run test:watch` | Runs the tests in watch mode |

## Project structure

```
index.html              App shell (Vite entry)
vite.config.js          Vite and Vitest configuration
public/                 Static files (robots.txt)
src/
  main.jsx              Entry point: createRoot and StrictMode
  App.jsx               Game board, turn handling, win/draw logic
  App.css               Board and button styling
  index.css             Page reset and base styles
  App.test.jsx          Game tests
  components/Icon.jsx   Inline SVG for circle, cross and empty cells
  setupTests.js         jest-dom matchers for Vitest
```

## How the game works

The board is an array of 9 cells, each `"empty"`, `"circle"` or `"cross"`. Clicking an empty cell fills it for the current player and passes the turn. After each move the app checks the 8 winning lines. If none is complete and no cell is empty, the game is a draw. Once the game ends, further clicks only show a message until **Reload Game** is pressed.

## Testing

`src/App.test.jsx` covers the initial render, alternating turns, filled-cell clicks, circle and cross wins, a draw, locking after a win, and resetting the board.

```bash
npm test
```

## Contributing

1. Create a branch from `main`.
2. Make your change and run `npm test` and `npm run build`.
3. Open a pull request.

## Notes

- The board state lives in a module-level array in `App.jsx` rather than in React state. The tests reset it between runs. Moving it into `useState` is a good next cleanup.
