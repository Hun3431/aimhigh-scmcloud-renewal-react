import { cn } from "cn-func";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  standard?: "primary" | "secondary" | "tertiary" | "delete";
  className?: string;
}

const Button = ({ children, onClick, standard, className }: ButtonProps) => {
  const standardStyle = {
    primary: "bg-[#007BFF] text-white",
    secondary: "outline outline-offset-0 outline-gray-300 text-black",
    tertiary: "outline outline-offset-0 outline-gray-300 bg-white text-black",
    delete: "bg-[#FF4D4F] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        standardStyle[standard || "primary"],
        "flex items-center justify-center",
        "px-4 max-h-8 rounded-md",
        "text-sm font-normal",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
