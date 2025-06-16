import { useSetAtom } from "jotai";
import { openDialogAtom } from "../../../../components/feedback/dialog/atom";
import Viewer from "../../../../components/viewer";
import CodeBlock from "../../../../components/codeBlock";

const dialogCode = `import { useSetAtom } from "jotai";
import { openDialogAtom } from "@components/feedback/dialog/atom";

const Example = () => {
  const openDialog = useSetAtom(openDialogAtom);
  const handleClick = () => {
    openDialog({
      title: "삭제 확인",
      description: "정말 삭제하시겠습니까?",
      acceptText: "삭제",
      cancelText: "취소",
      accept: () => {
        alert("삭제됨!");
      },
      cancel: () => {},
    });
  };
  return (
    <button
      className="bg-red-400 rounded-lg px-4 py-2 text-white"
      onClick={handleClick}
    >
      Open Dialog
    </button>
  );
};`;
const dialogUsageCode = `import GlobalDialog from "./components/feedback/dialog";
import Router from "./router";
const App = () => {
  return (
    <>
      <Router />
      <GlobalDialog />
    </>
  );
};
export default App;`;

const DialogPage = () => {
  const openDialog = useSetAtom(openDialogAtom);
  const handleClick = () => {
    openDialog({
      title: "삭제 확인",
      description: "정말 삭제하시겠습니까?",
      acceptText: "삭제",
      cancelText: "취소",
      accept: () => {
        alert("삭제됨!");
      },
      cancel: () => {},
    });
  };
  return (
    <div className="flex flex-col gap-2 pb-6">
      <p className="mb-4 whitespace-pre-wrap">
        {`이 페이지는 다이얼로그 컴포넌트의 사용 예시입니다. 버튼을 클릭하여 컴포넌트를 열 수 있습니다.

해당 컴포넌트는 전역 상태로 관리되며, 다른 컴포넌트에서도 쉽게 Dialog를 열 수 있습니다.
제목, 설명, 확인 및 취소 버튼을 포함하고 있으며, 각 버튼에 대한 동작을 정의할 수 있습니다.`}
      </p>

      <div className="text-xl font-bold">Example</div>
      <Viewer>
        <button
          className="bg-red-400 rounded-lg px-4 py-2 text-white"
          onClick={handleClick}
        >
          Open Dialog
        </button>
      </Viewer>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={dialogCode} />
        <CodeBlock path="App.tsx" code={dialogUsageCode} />
      </div>
    </div>
  );
};

export default DialogPage;
