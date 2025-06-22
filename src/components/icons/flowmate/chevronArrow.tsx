import { IconProps } from "./type";

interface ArrowIconProps extends IconProps {
  direction?: "left" | "right" | "up" | "down";
}

const ChevronArrowIcon = ({
  size = 24,
  color = "currentColor",
  direction = "up",
  ...props
}: ArrowIconProps) => {
  const rotationDegrees = {
    left: "90",
    right: "-90",
    up: "180",
    down: "0",
  }[direction];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotationDegrees}deg)` }}
      {...props}
    >
      <path
        d="M3.55365 4.77971C3.84662 5.07268 4.3224 5.07268 4.61537 4.77971L7.61537 1.77971C7.83099 1.56409 7.89427 1.24299 7.77709 0.961743C7.6599 0.680493 7.38802 0.497681 7.08334 0.497681L1.08334 0.500025C0.780992 0.500025 0.506774 0.682837 0.389586 0.964087C0.272399 1.24534 0.338024 1.56643 0.551305 1.78206L3.5513 4.78206L3.55365 4.77971Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronArrowIcon;
