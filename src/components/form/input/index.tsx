import { cn } from "cn-func";

interface InputProps {
  type?: "text" | "email" | "password" | "number";
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
}

const Input = ({
  type,
  className,
  onChange,
  value,
  disabled,
  readonly,
  placeholder,
}: InputProps) => {
  return (
    <input
      type={type || "text"}
      value={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readonly}
      placeholder={placeholder}
      className={cn(
        "flex-1 w-full",
        "max-h-8 px-3 py-1.5 rounded-md",
        "outline outline-offset-0 outline-gray-300 focus:outline-[#007BFF]",
        "text-sm placeholder:text-gray-300",
        className
      )}
    />
  );
};

export default Input;
