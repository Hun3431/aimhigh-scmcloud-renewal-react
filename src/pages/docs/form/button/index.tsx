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
      <p className="mb-4 whitespace-pre-wrap"></p>

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
