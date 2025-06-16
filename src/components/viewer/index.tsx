import { ReactNode, useState } from "react";
import { cn } from "cn-func";
import DarkModeToggle from "../form/toggle/darkMode";

interface ViewerPropsType {
  options?: ReactNode;
  children?: ReactNode;
}

const Viewer = ({ children, options }: ViewerPropsType) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={cn(
        "relative",
        "flex items-center justify-center",
        "w-full min-h-[25rem] py-48 px-4 px-auto",
        "border border-gray-300 rounded-lg",
        "duration-300",
        isDarkMode ? "bg-gray-800" : "bg-white"
      )}
    >
      <div className="absolute right-2 top-2">
        <DarkModeToggle value={isDarkMode} setValue={setIsDarkMode} />
      </div>
      {options && (
        <div className="absolute left-2 top-2 w-44 p-2 flex flex-col gap-2 bg-white rounded-lg">
          {options}
        </div>
      )}
      <div className="w-full max-w-80 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Viewer;
