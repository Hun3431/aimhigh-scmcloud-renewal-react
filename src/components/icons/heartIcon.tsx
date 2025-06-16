/**
 * HeartIcon 컴포넌트
 *
 * 이 컴포넌트는 사용자 정의가 가능한 하트 모양의 SVG 아이콘을 렌더링합니다.
 * 크기, 색상, 채우기 상태 등을 props를 통해 조절할 수 있습니다.
 */

import { IconPropsType } from "../../types/Icon";

/**
 * HeartIcon 컴포넌트
 * @param {IconPropsType} props - 하트 아이콘 컴포넌트 props
 * @returns {JSX.Element} 렌더링된 하트 아이콘 SVG
 */
const HeartIcon = ({
  filled = false,
  size = "1.3em", // 기본값을 Text Size의 1.3배로 사용
  baseColor = "currentColor",
  fillColor = "currentColor",
  strokeColor = "currentColor",
  filledStrokeColor = "currentColor",
  strokeWidth = 2,
}: IconPropsType) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill={filled ? fillColor : baseColor}
      stroke={filled ? filledStrokeColor : strokeColor}
      strokeWidth={strokeWidth}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

export default HeartIcon;
