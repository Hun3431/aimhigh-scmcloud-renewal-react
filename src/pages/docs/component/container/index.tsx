import CodeBlock from "../../../../components/codeBlock";
import Container from "../../../../components/component/container";
import { FileIcon } from "../../../../components/icons/flowmate";
import Viewer from "../../../../components/viewer";
import SetContainerCode from "../../../../components/component/container?raw";

const ContainerCode = `import Container from "@components/component/container";
import { FileIcon } from "@components/icons/flowmate";
const Example = () => {
  return (
    <Container>
      <div className="flex flex-row items-center gap-4">
        <div className="bg-purple-200 rounded-lg p-2 text-purple-700">
          <FileIcon />
        </div>
        <div className="flex-1">이번 달 견적 요청</div>
        <div className="bg-blue-200 rounded-md px-2 py-1 text-xs text-blue-700">
          Monthly
        </div>
      </div>
      <div className="text-2xl font-bold">71</div>
    </Container>
  );
};`;

const ContainerPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="whitespace-pre-wrap">
        {`이 페이지는 Container 컴포넌트의 사용 예시입니다.
Container는 콘텐츠를 감싸고 스타일링을 적용하는 데 사용됩니다.`}
      </p>
      <Viewer>
        <Container>
          <div className="flex flex-row items-center gap-4">
            <div className="bg-purple-200 rounded-lg p-2 text-purple-700">
              <FileIcon />
            </div>
            <div className="flex-1">이번 달 견적 요청</div>
            <div className="bg-blue-200 rounded-md px-2 py-1 text-xs text-blue-700">
              Monthly
            </div>
          </div>
          <div className="text-2xl font-bold">71</div>
        </Container>
      </Viewer>
      <div className="text-red-400 font-semibold whitespace-pre-wrap">
        {`해당 컴포넌트는 기본 배경색이 흰색이므로 색상을 변경하거나 부모 컴포넌트의 배경색을 추가해야합니다.
다크모드 활성화 시 보임`}
      </div>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={ContainerCode} />
        <CodeBlock
          title="SetContainerCode"
          path="@components/component/container?raw"
          code={SetContainerCode}
        />
      </div>
    </div>
  );
};

export default ContainerPage;
