import Cell from "./Cell";

const Board = ({ board, onCellClick, className = "" }) => (
  <div className={`grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 ${className}`}>
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