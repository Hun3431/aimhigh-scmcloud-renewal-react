import { useSetAtom } from "jotai";
import { openToastAtom } from "../../../../components/feedback/toast/atom";
import Viewer from "../../../../components/viewer";
import CodeBlock from "../../../../components/codeBlock";

const toastCode = `import { useSetAtom } from "jotai";
import { openToastAtom } from "@components/feedback/toast/atom";

const Example = () => {
  const openToast = useSetAtom(openToastAtom);
  const handleClick = () => {
    openToast({
      message: "이것은 Toast 메시지입니다.",
      type: "success", // "success" | "error" | "info" | "warning"
      duration: 3000, // 3초 후 자동 제거
    }); 
  }
  return (
    <button
      className="bg-red-400 rounded-lg px-4 py-2 text-white"
      onClick={handleClick}
    >
      Open Toast
    </button>
  );
};`;
const toastUsageCode = `import GlobalToast from "./components/feedback/toast";
import Router from "./router";
const App = () => {
  return (
    <>
      <Router />
      <GlobalToast />
    </>
  );
};
export default App;`;

const ToastPage = () => {
  const openToast = useSetAtom(openToastAtom);
  const handleClick = (type: "success" | "error" | "info" | "warning") => {
    openToast({
      message: "이것은 Toast 메시지입니다.",
      type: type || "success",
      duration: 3000, // 3초 후 자동 제거
    });
  };
  return (
    <div className="flex flex-col gap-2 pb-6">
      <p className="mb-4 whitespace-pre-wrap">
        {`이 페이지는 토스트 컴포넌트의 사용 예시입니다. 버튼을 클릭하여 컴포넌트를 열 수 있습니다.

해당 컴포넌트는 전역 상태로 관리되며, 다른 컴포넌트에서도 쉽게 Toast를 열 수 있습니다.
메시지, 타입, 삭제 시간을 포함하고 있으며, 각 버튼에 대한 동작을 정의할 수 있습니다.`}
      </p>

      <div className="text-xl font-bold">Example</div>
      <Viewer>
        <div className="flex flex-col gap-2">
          <button
            className="bg-green-400 rounded-lg px-4 py-2 text-white"
            onClick={() => {
              handleClick("success");
            }}
          >
            Open Toast
          </button>
          <button
            className="bg-red-400 rounded-lg px-4 py-2 text-white"
            onClick={() => {
              handleClick("error");
            }}
          >
            Open Toast
          </button>
          <button
            className="bg-gray-300 rounded-lg px-4 py-2 text-white"
            onClick={() => {
              handleClick("info");
            }}
          >
            Open Toast
          </button>
          <button
            className="bg-orange-300 rounded-lg px-4 py-2 text-white"
            onClick={() => {
              handleClick("warning");
            }}
          >
            Open Toast
          </button>
        </div>
      </Viewer>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={toastCode} />
        <CodeBlock path="App.tsx" code={toastUsageCode} />
      </div>
    </div>
  );
};

export default ToastPage;
