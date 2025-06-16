/**
 * SunIcon 컴포넌트
 *
 * 해(태양) 모양의 SVG 아이콘을 렌더링하는 재사용 가능한 컴포넌트입니다.
 * 크기, 색상, 채우기, 스트로크 두께 등을 props로 커스터마이즈할 수 있습니다.
 */

import { IconPropsType } from "../../../types/Icon";

/**
 * SunIcon 컴포넌트
 * @param {IconPropsType} props - 아이콘 컴포넌트 props
 * @returns {JSX.Element} 렌더링된 해 아이콘 SVG
 */
const SunIcon = ({
  filled = false,
  size = "1.3em",
  fillColor = "none",
  strokeColor = "currentColor",
  filledStrokeColor = "currentColor",
  strokeWidth = 2,
}: IconPropsType) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill={filled ? fillColor : "none"}
      stroke={filled ? filledStrokeColor : strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
};

export default SunIcon;
