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
      <p className="mb-4 whitespace-pre-wrap">
        {`이 페이지는 Tag 컴포넌트의 사용 예시입니다. Tag를 클릭하여 다양한 크기와 모양을 확인할 수 있습니다.
해당 컴포넌트는 크기(small, medium, large)와 모양(rounded 여부)을 설정할 수 있습니다.
Tag의 크기와 모양을 선택하여 다양한 스타일의 Tag를 확인할 수 있습니다.`}
      </p>

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
