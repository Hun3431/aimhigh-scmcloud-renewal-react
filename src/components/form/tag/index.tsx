import { cn } from "cn-func";

interface TagProps {
  children?: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  color?: string;
  bgColor?: string;
  rounded?: boolean;
}

const Tag = ({
  children,
  className,
  size,
  color,
  bgColor,
  rounded,
}: TagProps) => {
  const sizeStyle = {
    small: "text-sm px-2 h-6",
    medium: "text-sm px-3 h-7",
    large: "text-base px-4 h-8",
  };
  const roundedStyle = rounded ? "rounded-full" : "rounded-md";
  return (
    <div
      className={cn(
        "flex items-center gap-1",
        sizeStyle[size || "small"],
        color || "text-blue-700",
        bgColor || "bg-blue-200",
        roundedStyle,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
