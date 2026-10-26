const svgProps = {
  className: "icons",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
    case "cross":
      return (
        <svg {...svgProps}>
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      );
    default:
      return (
        <svg {...svgProps} strokeWidth={2}>
          <path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" />
        </svg>
      );
  }
};

export default Icon;
