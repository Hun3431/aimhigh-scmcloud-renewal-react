import { useState } from "react";
import CodeBlock from "../../../../components/codeBlock";
import Viewer from "../../../../components/viewer";
import Input from "../../../../components/form/input";

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
      <p className="mb-4 whitespace-pre-wrap"></p>

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
      </div>
    </div>
  );
};

export default InputPage;
