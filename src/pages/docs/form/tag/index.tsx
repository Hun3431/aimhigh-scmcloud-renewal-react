import { useState } from "react";
import CodeBlock from "../../../../components/codeBlock";
import SetButtonCode from "../../../../components/form/tag?raw";
import Viewer from "../../../../components/viewer";
import Tag from "../../../../components/form/tag";

const tagCode = `import Tag from "@components/form/tag";

const Example = () => {
  return (
    <Tag size="small" rounded={false}>
      Monthly
    </Tag>
  );
};
`;

const TagPage = () => {
  const [size, setSize] = useState<"small" | "medium" | "large">("small");
  const [rounded, setRounded] = useState<boolean>(false);

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
                setSize(e.target.value as "small" | "medium" | "large")
              }
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <div
              className="flex flex-row gap-2"
              onClick={() => setRounded(!rounded)}
            >
              <input type="checkbox" checked={rounded} />
              <label>Disabled</label>
            </div>
          </>
        }
      >
        <Tag size={size} rounded={rounded}>
          Monthly
        </Tag>
      </Viewer>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={tagCode} />
        <CodeBlock
          title="SetButtonCode"
          path="components/form/button/index.tsx"
          code={SetButtonCode}
        />
      </div>
    </div>
  );
};

export default TagPage;
