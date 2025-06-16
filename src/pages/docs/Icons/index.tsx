import { Block } from "@uiw/react-color";
import { useEffect, useState } from "react";
import {
  ArrowLogoutIcon,
  CalendarIcon,
  CheckListIcon,
  ClockIcon,
  CodeIcon,
  DocumentCheckIcon,
  DocumentListIcon,
  DocumentLockIcon,
  FileIcon,
  FormIcon,
  MenuIcon,
  NotificationBellIcon,
  OfferAmountIcon,
  ReportIcon,
  ShieldMailIcon,
  TruckIcon,
} from "../../../components/icons/flowmate";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "cn-func";

const Icons = [
  <ArrowLogoutIcon size={32} />,
  <CalendarIcon size={32} />,
  <CheckListIcon size={32} />,
  <ClockIcon size={32} />,
  <CodeIcon size={32} />,
  <DocumentCheckIcon size={32} />,
  <DocumentListIcon size={32} />,
  <DocumentLockIcon size={32} />,
  <FileIcon size={32} />,
  <FormIcon size={32} />,
  <MenuIcon size={32} />,
  <NotificationBellIcon size={32} />,
  <OfferAmountIcon size={32} />,
  <ReportIcon size={32} />,
  <ShieldMailIcon size={32} />,
  <TruckIcon size={32} />,
];

const IconsPage = () => {
  const [hex, setHex] = useState("#555555");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIconIndex, setSelectedIconIndex] = useState<number>(0);

  useEffect(() => {
    setIsOpen(false);
  }, [hex]);

  const handleIconClick = (index: number) => {
    setSelectedIconIndex(index);
  };

  const handleCopyCode = () => {
    const code = `import { ${Icons[selectedIconIndex].type.name} } from "@components/icons/flowmate";
            
const Example = () => {
  return (
    <${Icons[selectedIconIndex].type.name} size={32} color="${hex}" />
  );
}`;
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="flex flex-col gap-2">
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
        {Icons.map((Icon, index) => (
          <IconWrapper key={index} onClick={() => handleIconClick(index)}>
            {Icon}
          </IconWrapper>
        ))}
      </div>
      <div className="flex flex-col gap-2 my-4">
        <div className="text-xl font-bold">Usage</div>
        <div className="bg-gray-100 rounded-lg">
          <div className="relative flex flex-row justify-between p-4 border-b border-gray-300">
            <div>example.tsx</div>
            <button className="relative pl-1 pb-1" onClick={handleCopyCode}>
              <div className="w-3.5 h-4.5 border-2 bg-white border-[#555] rounded-xs" />
              <div className="absolute top-1 right-1 w-3.5 h-4.5 bg-white border-2 border-[#555] rounded-xs" />
            </button>
          </div>
          <CodeBlock
            code={`import { ${Icons[selectedIconIndex].type.name} } from "@components/icons/flowmate";
const Example = () => {
  return (
    <${Icons[selectedIconIndex].type.name} size={32} color="${hex}" />
  );
}`}
          />
        </div>
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
      className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <Highlight theme={themes.oneLight} language="tsx" code={code}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cn("whitespace-pre-wrap p-4", className)} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default IconsPage;
