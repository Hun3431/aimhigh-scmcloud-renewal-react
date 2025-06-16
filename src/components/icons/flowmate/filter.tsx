import { IconProps } from "./type";

const FilterIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.49872 9.50224C3.49872 9.71954 3.67305 9.8951 3.88913 9.8951H7.11055C7.32663 9.8951 7.50096 9.71954 7.50096 9.50224V7.09599H3.49872V9.50224ZM10.0189 1.10492H0.980755C0.679974 1.10492 0.492139 1.43271 0.643143 1.69421L3.36 6.31028H7.64214L10.359 1.69421C10.5075 1.43271 10.3197 1.10492 10.0189 1.10492Z"
      fill={color}
    />
  </svg>
);

export default FilterIcon;
