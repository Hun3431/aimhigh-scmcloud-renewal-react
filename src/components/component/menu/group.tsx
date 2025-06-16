import { cn } from "cn-func";

interface MenuGroupProps {
  children: React.ReactNode;
  className?: string;
}

const Group = ({ children, className }: MenuGroupProps) => {
  return <div className={cn("flex flex-row gap-4", className)}>{children}</div>;
};

export default Group;
