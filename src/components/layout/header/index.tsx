import { cn } from "cn-func";
import { MenuIcon } from "../../icons/flowmate";
import { menuOpen } from "../aside";
import { useSetAtom } from "jotai";

const Header = () => {
  const setIsOpen = useSetAtom(menuOpen);
  const handleGithubClick = () => {
    window.open("https://github.com/Hun3431/aimhigh-scmcloud-renewal-react");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-100",
        "flex flex-row justify-between items-center gap-4",
        "min-w-2xs w-full max-w-7xl h-14 pl-2 pr-4"
      )}
    >
      <div className="hidden sm:block">Logo</div>
      <div
        className="block sm:hidden p-2 rounded-lg hover:bg-gray-50"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon size={24} />
      </div>
      {/* <img
        src={"/favicon.ico"}
        alt="logo"
        width={80}
        className="mt-2 hidden sm:block"
      /> */}
      <button className="w-5 h-5 px-0.5 py-1 sm:hidden flex flex-col justify-between">
        <div className="w-full h-0.5 bg-gray-20 rounded-full" />
        <div className="w-full h-0.5 bg-gray-20 rounded-full" />
        <div className="w-full h-0.5 bg-gray-20 rounded-full" />
      </button>
      {/* <nav className="grow hidden sm:flex flex-row justify-start gap-4">
        <div>docs</div>
      </nav> */}
      {/* <button className="grow sm:grow-0 w-60 bg-gray-95 border border-gray-80 rounded-lg py-1 px-2 text-left text-sm text-gray-60">
        Search Documentation...
      </button> */}
      <button
        className="rounded-full hover:bg-gray-95"
        onClick={handleGithubClick}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="github"
          width={20}
        />
      </button>
    </header>
  );
};

export default Header;
