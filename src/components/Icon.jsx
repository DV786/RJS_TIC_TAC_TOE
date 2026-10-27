const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return (
        <svg {...svgProps} className="size-[56%] stroke-circle">
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
    case "cross":
      return (
        <svg {...svgProps} className="size-[56%] stroke-cross">
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      );
    default:
      return null
  }
};

export default Icon;
