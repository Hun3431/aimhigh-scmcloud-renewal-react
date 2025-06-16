import { Block } from "@uiw/react-color";
import { useEffect, useState } from "react";
import {
  ArrowLogoutIcon,
  CalendarCheckIcon,
  CalendarIcon,
  CheckListIcon,
  ClockIcon,
  CodeIcon,
  DocumentCheckIcon,
  DocumentListIcon,
  DocumentLockIcon,
  ShareSquareIcon,
  FileIcon,
  FormIcon,
  MenuIcon,
  BellIcon,
  OfferAmountIcon,
  PlusCircleIcon,
  PlusSearchIcon,
  QuestionCircleIcon,
  ReportIcon,
  MinusSearchIcon,
  FullScreenIcon,
  OpenBoxIcon,
  TrashIcon,
  TruckIcon,
  FilterIcon,
} from "../../../components/icons/flowmate";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "cn-func";
import ArrowIcon from "../../../components/icons/arrowIcon";

const IconComponents = [
  ArrowIcon,
  ArrowLogoutIcon,
  CalendarIcon,
  CalendarCheckIcon,
  CheckListIcon,
  ClockIcon,
  CodeIcon,
  DocumentCheckIcon,
  DocumentListIcon,
  DocumentLockIcon,
  ShareSquareIcon,
  FileIcon,
  FormIcon,
  MenuIcon,
  BellIcon,
  OfferAmountIcon,
  PlusCircleIcon,
  PlusSearchIcon,
  QuestionCircleIcon,
  ReportIcon,
  MinusSearchIcon,
  FullScreenIcon,
  OpenBoxIcon,
  TrashIcon,
  TruckIcon,
  FilterIcon,
];

// ArrowIcon,
// ArrowLogoutIcon,
// CalendarIcon,
// CalendarCheckIcon,
// CheckListIcon,
// ClockIcon ,
// CodeIcon,
// DocumentCheckIcon,
// DocumentListIcon,
// DocumentLockIcon,
// EditSquare,
// FileIcon,
// FormIcon,
// MenuIcon,
// BellIcon,
// OfferAmountIcon,
// PlusCircleIcon,
// PlusSearchIcon,
// QuestionCircle,
// ReportIcon,
// SearchIcon,
// FullScreenIcon,
// OpenBoxIcon,
// TrashIcon ,
// TruckIcon ,
// FilterIcon,

const IconNames = [
  "ArrowIcon",
  "ArrowLogoutIcon",
  "CalendarIcon",
  "CalendarCheckIcon",
  "CheckListIcon",
  "ClockIcon",
  "CodeIcon",
  "DocumentCheckIcon",
  "DocumentListIcon",
  "DocumentLockIcon",
  "ShareSquareIcon",
  "FileIcon",
  "FormIcon",
  "MenuIcon",
  "BellIcon",
  "OfferAmountIcon",
  "PlusCircleIcon",
  "PlusSearchIcon",
  "QuestionCircleIcon",
  "ReportIcon",
  "MinusSearchIcon",
  "FullScreenIcon",
  "OpenBoxIcon",
  "TrashIcon",
  "TruckIcon",
  "FilterIcon",
];

const addIconCode = `import IconProps from "./type;

const ExampleIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="input your svg path here"
      fill={color}
    />
  </svg>
);

export default ExampleIcon;`;
const addIndexCode = `export { default as ExampleIcon } from "./example";`;

const IconsPage = () => {
  const [hex, setHex] = useState("#555555");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIconIndex, setSelectedIconIndex] = useState<number>(0);

  const code = `import { ${
    IconNames[selectedIconIndex]
  } } from "@components/icons/flowmate";
            
const Example = () => {
  return (
    <${IconNames[selectedIconIndex]} ${
    IconNames[selectedIconIndex] === "ArrowIcon" && `direction="left " `
  }size={32} color="${hex}" />
  );
}`;

  useEffect(() => {
    setIsOpen(false);
  }, [hex]);

  const handleIconClick = (index: number) => {
    setSelectedIconIndex(index);
  };

  return (
    <div className="flex flex-col gap-2 pb-6">
      <p className="mb-4 whitespace-pre-wrap">
        {`이 페이지에서는 다양한 아이콘 컴포넌트를 소개합니다. 각 아이콘은 크기, 색상, 채우기 상태 등을 props를 통해 조절할 수 있습니다.

아래 아이콘을 클릭하면 사용방법을 확인할 수 있습니다.`}
      </p>
      <div className="relative max-h-6">
        <div className="flex items-center gap-1.5">
          아이콘 색상 :
          <button
            onClick={() => setIsOpen(true)}
            className="min-w-5 min-h-5 rounded-full border-1 border-gray-600 "
            style={{ backgroundColor: hex }}
          />
        </div>
        {isOpen && (
          <>
            <Block
              className="absolute top-[100%] translate-y-3 left-[13px] z-10"
              color={hex}
              onChange={(color) => {
                setHex(color.hex);
              }}
            />
            <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-4" style={{ color: hex }}>
        {IconComponents.map((Icon, index) => (
          <IconWrapper key={index} onClick={() => handleIconClick(index)}>
            <Icon size={32} />
            <div className="flex-1 text-center text-gray-600 mt-1">
              {IconNames[index]}
            </div>
          </IconWrapper>
        ))}
      </div>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={code} />
      </div>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock
          title="AddIcon"
          path="@components/icons/flowmate/example.tsx"
          code={addIconCode}
        />
        <CodeBlock
          path="@components/icons/flowmate/index.ts"
          code={addIndexCode}
        />
      </div>
      <div className="text-red-400 font-semibold">
        저장 위치에 따라 import 경로가 달라질 수 있습니다.
      </div>
    </div>
  );
};

const IconWrapper = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className="flex flex-row items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 hover:bg-gray-200 text-xs font-semibold min-w-52 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const CodeBlock = ({
  title,
  path,
  code,
}: {
  title?: string;
  path?: string;
  code: string;
}) => {
  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {title && <div className="text-xl font-bold">{title}</div>}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="relative flex flex-row justify-between p-4 border-b border-gray-300">
          <div>{path}</div>
          <button
            className="relative pl-1 pb-1"
            onClick={() => {
              handleCopyCode(addIndexCode);
            }}
          >
            <div className="w-3.5 h-4.5 border-2 bg-white border-[#555] rounded-xs" />
            <div className="absolute top-1 right-1 w-3.5 h-4.5 bg-white border-2 border-[#555] rounded-xs" />
          </button>
        </div>
        <Highlight theme={themes.oneLight} language="tsx" code={code}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn("whitespace-pre-wrap p-4", className)}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span>{i + 1} </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </>
  );
};

export default IconsPage;
