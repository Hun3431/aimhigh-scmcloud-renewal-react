import { IconProps } from "./type";

const MenuIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3.75C0 3.05859 0.558594 2.5 1.25 2.5H16.25C16.9414 2.5 17.5 3.05859 17.5 3.75C17.5 4.44141 16.9414 5 16.25 5H1.25C0.558594 5 0 4.44141 0 3.75ZM0 10C0 9.30859 0.558594 8.75 1.25 8.75H16.25C16.9414 8.75 17.5 9.30859 17.5 10C17.5 10.6914 16.9414 11.25 16.25 11.25H1.25C0.558594 11.25 0 10.6914 0 10ZM17.5 16.25C17.5 16.9414 16.9414 17.5 16.25 17.5H1.25C0.558594 17.5 0 16.9414 0 16.25C0 15.5586 0.558594 15 1.25 15H16.25C16.9414 15 17.5 15.5586 17.5 16.25Z"
      fill={color}
    />
  </svg>
);

export default MenuIcon;
