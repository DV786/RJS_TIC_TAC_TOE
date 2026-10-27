import Icon from "./Icon";

const Cell = ({ index, value, onClick }) => (
  <button
    type="button"
    aria-label={`Cell ${index + 1}, ${value}`}
    onClick={onClick}
    className="flex items-center justify-center aspect-square cursor-pointer rounded-md border border-line bg-cell"
  >
    <Icon name={value} />
  </button>
);

export default Cell;