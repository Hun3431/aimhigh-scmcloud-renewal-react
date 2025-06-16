/**
 * XIcon 컴포넌트
 *
 * 이 컴포넌트는 사용자 정의가 가능한 X(닫기) 모양의 SVG 아이콘을 렌더링합니다.
 * 크기, 색상, 채우기 상태 등을 props를 통해 조절할 수 있습니다.
 */

import { IconPropsType } from "../../types/Icon";

/**
 * XIcon 컴포넌트
 * @param {IconPropsType} props - X 아이콘 컴포넌트 props
 * @returns {JSX.Element} 렌더링된 X 아이콘 SVG
 */
const XIcon = ({
  filled = false,
  size = "1.3em", // 기본값을 Text Size의 1.3배로 사용
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
      fill={filled ? fillColor : "none"}
      stroke={filled ? filledStrokeColor : strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </svg>
  );
};

export default XIcon;
