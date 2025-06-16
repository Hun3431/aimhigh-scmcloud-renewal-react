import { cn } from "cn-func";
import { ReactNode } from "react";

export interface ToggleProps {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  defaultColor?: string;
  toggleColor?: string;
  defaultContent?: ReactNode;
  toggleContent?: ReactNode;
}

const Toggle = ({
  value,
  setValue,
  defaultColor,
  toggleColor,
  defaultContent,
  toggleContent,
}: ToggleProps) => {
  const handleToggle = () => {
    setValue((prev) => !prev);
  };
  return (
    <div
      className={cn(
        "relative",
        "flex flex-row items-center justify-between",
        "w-14 p-1 rounded-full",
        "duration-400",
        value ? toggleColor || "bg-gray-600" : defaultColor || "bg-gray-300"
      )}
      onClick={handleToggle}
    >
      <div
        className={cn(
          "absolute z-10",
          "w-6 h-6 bg-white rounded-full",
          value ? "left-[calc(100%-28px)]" : "left-1",
          "duration-400"
        )}
      />
      <div
        className={cn(
          "w-6 h-6 p-1 z-20 text-gray-300 duration-200",
          value && "opacity-0"
        )}
      >
        {defaultContent}
      </div>
      <div
        className={cn(
          "w-6 h-6 p-1 z-20 text-gray-600 duration-200",
          !value && "opacity-0"
        )}
      >
        {toggleContent}
      </div>
    </div>
  );
};

export default Toggle;
