import { useState } from "react";
import CodeBlock from "../../../../components/codeBlock";
import Viewer from "../../../../components/viewer";
import Input from "../../../../components/form/input";
import SetInputCode from "../../../../components/form/input?raw";

const inputCode = `import Input from "@components/form/input";

const Example = () => {
  return (
    <Input
      placeholder="Input text here"
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      disabled={inputDisabled}
      readonly={inputReadOnly}
    />
  );
};
`;

const InputPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [inputReadOnly, setInputReadOnly] = useState(false);

  return (
    <div className="flex flex-col gap-2 pb-6">
      <p className="mb-4 whitespace-pre-wrap">
        {`이 페이지는 Input 컴포넌트의 사용 예시입니다. Input 필드를 클릭하여 텍스트를 입력할 수 있습니다.
해당 컴포넌트는 다양한 속성(placeholder, type 등)을 지원하며,
disabled 및 readOnly 상태를 설정할 수 있습니다.
Input 필드의 값을 변경하거나 disabled/readOnly 상태를 토글하여 다양한 동작을 확인할 수 있습니다.`}
      </p>

      <div className="text-xl font-bold">Example</div>
      <Viewer
        options={
          <>
            <div
              className="flex flex-row gap-2"
              onClick={() => setInputDisabled(!inputDisabled)}
            >
              <input type="checkbox" checked={inputDisabled} />
              <label>Disabled</label>
            </div>
            <div
              className="flex flex-row gap-2"
              onClick={() => setInputReadOnly(!inputReadOnly)}
            >
              <input type="checkbox" checked={inputReadOnly} />
              <label>Read Only</label>
            </div>
          </>
        }
      >
        <Input
          placeholder="Input text here"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={inputDisabled}
          readonly={inputReadOnly}
        />
      </Viewer>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={inputCode} />
        <CodeBlock
          title="SetInputCode"
          path="components/form/input/index.tsx"
          code={SetInputCode}
        />
      </div>
    </div>
  );
};

export default InputPage;
