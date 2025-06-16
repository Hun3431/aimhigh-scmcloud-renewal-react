/**
 * MoonIcon 컴포넌트
 *
 * 달(초승달) 모양의 SVG 아이콘을 렌더링하는 재사용 가능한 컴포넌트입니다.
 * 크기, 색상, 채우기, 스트로크 두께 등을 props로 커스터마이즈할 수 있습니다.
 */

import { IconPropsType } from "./type";

/**
 * MoonIcon 컴포넌트
 * @param {IconPropsType} props - 아이콘 컴포넌트 props
 * @returns {JSX.Element} 렌더링된 달 아이콘 SVG
 */
const MoonIcon = ({
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
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
    </svg>
  );
};

export default MoonIcon;
