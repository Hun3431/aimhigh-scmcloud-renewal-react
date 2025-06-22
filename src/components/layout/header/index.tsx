import { cn } from "cn-func";
import { MenuIcon } from "../../icons/flowmate";
import { menuOpen } from "../aside";
import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const setIsOpen = useSetAtom(menuOpen);
  const handleGithubClick = () => {
    window.open("https://github.com/Hun3431/aimhigh-scmcloud-renewal-react");
  };
  const handleDashboardClick = () => {
    navigate("/dashboard");
  };
  return (
    <header
      className={cn(
        "sticky top-0 z-100",
        "flex flex-row justify-between items-center gap-4",
        "min-w-2xs w-full max-w-7xl h-14 pl-2 pr-4"
      )}
    >
      <div className="hidden sm:block text-lg font-bold">AimHigh Document</div>
      <div
        className="block sm:hidden p-2 rounded-lg hover:bg-gray-50"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon size={24} />
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="rounded-lg p-2 hover:bg-gray-50"
          onClick={handleDashboardClick}
        >
          Dashboard
        </button>
        <button
          className="rounded-lg p-2 hover:bg-gray-50"
          onClick={handleGithubClick}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="github"
            width={20}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
