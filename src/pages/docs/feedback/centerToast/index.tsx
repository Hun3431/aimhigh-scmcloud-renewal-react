import { useSetAtom } from "jotai";
import { centerToastAtom } from "../../../../components/feedback/toast copy/atom";
import Viewer from "../../../../components/viewer";
import CodeBlock from "../../../../components/codeBlock";

const toastCode = `import { useSetAtom } from "jotai";
import { centerToastAtom } from "@/components/feedback/centerToast/atom";

const Example = () => {
  const setToast = useSetAtom(centerToastAtom);

  const handleCopy = (text:string) => {
    navigator.clipboard.writeText(text);
    setToast({
      content: <>📋 클립보드에 복사되었습니다!</>,
      isOpen: true,
      duration: 2000,
    });
  };
  return (
    <button
      className="bg-white border border-gray-300 rounded-lg px-4 py-2"
      onClick={
        handleCopy("이것은 클립보드에 복사된 메시지입니다.");
      }
    >
      Open Toast
    </button>
  );
};`;
const toastUsageCode = `import CenterToast from "./components/feedback/centerToast";
import Router from "./router";

const App = () => {
  return (
    <>
      <Router />
      <CenterToast />
    </>
  );
};
export default App;`;

const CenterToastPage = () => {
  const setToast = useSetAtom(centerToastAtom);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToast({
      content: <>📋 클립보드에 복사되었습니다!</>,
      isOpen: true,
      duration: 2000,
    });
  };
  return (
    <div className="flex flex-col gap-2 pb-6">
      <p className="mb-4 whitespace-pre-wrap">{``}</p>

      <div className="text-xl font-bold">Example</div>
      <Viewer>
        <button
          className="bg-white border border-gray-300 rounded-lg px-4 py-2"
          onClick={() => {
            handleCopy("이것은 클립보드에 복사된 메시지입니다.");
          }}
        >
          Open Toast
        </button>
      </Viewer>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={toastCode} />
        <CodeBlock path="App.tsx" code={toastUsageCode} />
      </div>
    </div>
  );
};

export default CenterToastPage;
