import Cell from "./Cell";

const Board = ({ board, onCellClick }) => (
  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-[min(100%,28rem)]">
    {board.map((value, index) => (
      <Cell 
        key={index}
        index={index}
        value={value}
        onClick={() => onCellClick(index)}
      />
    ))}
  </div>
);

export default Board;