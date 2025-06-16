/**
 * 아이콘 컴포넌트의 props를 위한 인터페이스
 * @typedef {object} IconPropsType
 * @property {boolean} filled 아이콘이 선택되었는지 나타내는 옵션(default: false, nullable)
 * @property {number} size 아이콘의 크기를 나타내는 옵션(default: 24, nullable)
 * @property {string} baseColor 아이콘이 채워지지 않았을 때 기본 색상을 나타내는 옵션(default: none, nullable)
 * @property {string} fillColor 아이콘이 채워졌을 때 색상을 나타내는 옵션(default: red, nullable)
 * @property {string} strokeColor 아이콘이 채워지지 않았을 때 테두리의 색상을 나타내는 옵션(default: black, nullable)
 * @property {string} filledStrokeColor 아이콘이 채워졌을 때 테두리의 나타내는 옵션(default: black, nullable)
 * @property {number} strokeWidth 아이콘 테두리의 두께를 나타내는 옵션
 * @returns {ReactNode} 하트 아이콘 HTML을 반환
 */
export interface IconPropsType {
  filled?: boolean;
  size?: number | string;
  baseColor?: string;
  fillColor?: string;
  strokeColor?: string;
  filledStrokeColor?: string;
  strokeWidth?: number;
}
