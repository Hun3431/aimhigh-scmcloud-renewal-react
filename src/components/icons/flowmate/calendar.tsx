import { IconProps } from "./type";

const CalendarIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.75 1.875H10.125V0.875C10.125 0.80625 10.0688 0.75 10 0.75H9.125C9.05625 0.75 9 0.80625 9 0.875V1.875H5V0.875C5 0.80625 4.94375 0.75 4.875 0.75H4C3.93125 0.75 3.875 0.80625 3.875 0.875V1.875H1.25C0.973437 1.875 0.75 2.09844 0.75 2.375V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V2.375C13.25 2.09844 13.0266 1.875 12.75 1.875ZM12.125 12.125H1.875V6.1875H12.125V12.125ZM1.875 5.125V3H3.875V3.75C3.875 3.81875 3.93125 3.875 4 3.875H4.875C4.94375 3.875 5 3.81875 5 3.75V3H9V3.75C9 3.81875 9.05625 3.875 9.125 3.875H10C10.0688 3.875 10.125 3.81875 10.125 3.75V3H12.125V5.125H1.875Z"
      fill={color}
    />
  </svg>
);

export default CalendarIcon;
