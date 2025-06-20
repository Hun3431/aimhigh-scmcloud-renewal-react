import { cn } from "cn-func";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  standard?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
  size?: "small" | "medium" | "large";
  className?: string;
}

const Button = ({
  children,
  onClick,
  standard,
  size,
  className,
}: ButtonProps) => {
  const standardStyle = {
    primary: "bg-[#007BFF] text-white",
    secondary: "bg-[#FF4D4F] text-white",
    tertiary: "outline outline-offset-0 outline-gray-300 bg-white text-black",
    quaternary:
      "outline-1 outline-offset-0 outline-gray-300 outline-dotted text-black ",
    quinary:
      "bg-white outline outline-offset-0 outline-[#FF4D4F] text-[#211616]",
  };
  const sizeStyle = {
    small: "h-8",
    medium: "h-10",
    large: "px-6 h-12 rounded-lg text-base",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center",
        "px-4 rounded-md",
        "text-sm font-normal",
        standardStyle[standard || "primary"],
        sizeStyle[size || "small"],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
