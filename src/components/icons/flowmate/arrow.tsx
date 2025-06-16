import { IconProps } from "./type";

interface ArrowIconProps extends IconProps {
  direction?: "left" | "right" | "up" | "down";
}

const ArrowIcon = ({
  size = 24,
  color = "currentColor",
  direction = "left",
  ...props
}: ArrowIconProps) => {
  const rotationDegrees = {
    left: "0",
    right: "180",
    up: "-90",
    down: "90",
  }[direction];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotationDegrees}deg)` }}
      {...props}
    >
      <path
        d="M10.3125 2.41095V1.20313C10.3125 1.09845 10.1922 1.04063 10.111 1.1047L3.06721 6.60626C3.00736 6.6528 2.95894 6.7124 2.92563 6.7805C2.89232 6.8486 2.875 6.92341 2.875 6.99923C2.875 7.07504 2.89232 7.14985 2.92563 7.21796C2.95894 7.28606 3.00736 7.34565 3.06721 7.3922L10.111 12.8938C10.1938 12.9578 10.3125 12.9 10.3125 12.7953V11.5875C10.3125 11.5109 10.2766 11.4375 10.2172 11.3906L4.59221 7.00001L10.2172 2.60782C10.2766 2.56095 10.3125 2.48751 10.3125 2.41095Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;
