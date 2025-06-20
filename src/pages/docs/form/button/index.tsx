import { useState } from "react";
import CodeBlock from "../../../../components/codeBlock";
import Button from "../../../../components/form/button";
import SetButtonCode from "../../../../components/form/button?raw";
import Viewer from "../../../../components/viewer";

const buttonCode = `import Button from "@components/form/button";

const Example = () => {
  return (
    <Button standard="primary" onClick={() => {}}>
      Click
    </Button>  
  );
};
`;

const ButtonPage = () => {
  const [standard, setStandard] = useState<
    "primary" | "secondary" | "tertiary" | "quaternary" | "quinary"
  >("primary");
  const [size, setSize] = useState<"small" | "medium" | "large">("small");

  return (
    <div className="flex flex-col gap-2 pb-6">
      <p className="mb-4 whitespace-pre-wrap">
        {`이 페이지는 버튼 컴포넌트의 사용 예시입니다. 버튼을 클릭하여 컴포넌트를 사용할 수 있습니다.
해당 컴포넌트는 다양한 표준(Primary, Secondary 등)과 크기(Small, Medium, Large)를 지원합니다.
버튼의 표준과 크기를 선택하여 다양한 스타일의 버튼을 확인할 수 있습니다.`}
      </p>

      <div className="text-xl font-bold">Example</div>
      <Viewer
        options={
          <>
            <select
              className="py-1 rounded-sm outline outline-offset-2 outline-gray-300"
              onChange={(e) =>
                setStandard(
                  e.target.value as
                    | "primary"
                    | "secondary"
                    | "tertiary"
                    | "quaternary"
                    | "quinary"
                )
              }
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="tertiary">Tertiary</option>
              <option value="quaternary">Quaternary</option>
              <option value="quinary">Quinary</option>
            </select>
            <select
              className="py-1 rounded-sm outline outline-offset-2 outline-gray-300"
              onChange={(e) =>
                setSize(e.target.value as "small" | "medium" | "large")
              }
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </>
        }
      >
        <Button standard={standard} size={size} onClick={() => {}}>
          Click
        </Button>
      </Viewer>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={buttonCode} />
        <CodeBlock
          title="SetButtonCode"
          path="components/form/button/index.tsx"
          code={SetButtonCode}
        />
      </div>
    </div>
  );
};

export default ButtonPage;
