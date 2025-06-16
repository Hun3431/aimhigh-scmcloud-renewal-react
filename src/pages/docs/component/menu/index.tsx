import CodeBlock from "../../../../components/codeBlock";
import { Menu } from "../../../../components/component/menu";
import { FileIcon, FormIcon } from "../../../../components/icons/flowmate";
import Viewer from "../../../../components/viewer";

const MenuCode = `import { Menu } from "@components/component/menu";
import { FormIcon } from "@components/icons/flowmate";
import { FileIcon } from "@components/icons/flowmate";
import { useNavigate } from "react-router-dom";

const Example = () => {
  const navigate = useNavigate();
  
  return (
    <Viewer>
      <Menu.Group>
        <Menu.Item icon={<FormIcon size={14} />} onClick={() => {
          navigate("/status");
        }}>Status</Menu.Item>
        <Menu.Item icon={<FileIcon size={14} />} onClick={() => {
          navigate("/request");
        }}>Request</Menu.Item>
        <Menu.Item icon={<FileIcon size={14} />} onClick={() => {
          navigate("/offer");
        }}>Offer</Menu.Item>
      </Menu.Group>
    </Viewer>
  );
} ;
  
export default Example;`;

const MenuPage = () => {
  return (
    <div className="flex flex-col gap-2 pb-6">
      <p className="mb-4 whitespace-pre-wrap">
        {`이 페이지는 메뉴 컴포넌트의 사용 예시입니다. 메뉴는 그룹과 아이템으로 구성되어 있으며, 각 아이템은 링크를 포함할 수 있습니다.`}
      </p>

      <div className="text-xl font-bold">Example</div>
      <Viewer>
        <Menu.Group>
          <Menu.Item icon={<FormIcon size={14} />}>Status</Menu.Item>
          <Menu.Item icon={<FileIcon size={14} />}>Request</Menu.Item>
          <Menu.Item icon={<FileIcon size={14} />}>Offer</Menu.Item>
        </Menu.Group>
      </Viewer>
      <div className="text-red-400 font-semibold whitespace-pre-wrap">
        {`해당 컴포넌트는 배경색이 있는 헤더에서 사용 가능한 메뉴입니다.
다크모드 활성화 시 보임`}
      </div>
      <div className="flex flex-col gap-2 my-4">
        <CodeBlock title="Usage" path="example.tsx" code={MenuCode} />
      </div>
    </div>
  );
};

export default MenuPage;
