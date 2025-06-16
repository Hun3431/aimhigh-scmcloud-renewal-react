/**
 * ArrowIcon 컴포넌트
 *
 * 이 컴포넌트는 사용자 정의가 가능한 화살표 모양의 SVG 아이콘을 렌더링합니다.
 * 크기, 색상, 선 두께, 방향 등을 props를 통해 조절할 수 있습니다.
 */

import { IconPropsType } from "../../types/Icon";

type Direction = "left" | "right" | "up" | "down";

interface ArrowIconProps extends IconPropsType {
  direction?: Direction;
}

const ArrowIcon = ({
  filled = false,
  size = 24,
  baseColor = "none",
  fillColor = "black",
  strokeColor = "currentColor",
  filledStrokeColor = "black",
  strokeWidth = 2,
  direction = "left",
}: ArrowIconProps) => {
  const getTransform = () => {
    switch (direction) {
      case "right":
        return "rotate(180 12 12)";
      case "up":
        return "rotate(90 12 12)";
      case "down":
        return "rotate(270 12 12)";
      default:
        return "";
    }
  };

  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill={filled ? fillColor : baseColor}
      stroke={filled ? filledStrokeColor : strokeColor}
      strokeWidth={strokeWidth}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
        transform={getTransform()}
      />
    </svg>
  );
};

export default ArrowIcon;
