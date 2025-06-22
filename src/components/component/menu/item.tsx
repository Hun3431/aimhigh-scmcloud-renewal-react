import { cn } from "cn-func";

interface MenuItemProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Item = ({ icon, children, onClick, className }: MenuItemProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-1.5",
        "px-3 py-2 rounded-lg border border-white/20 bg-white/15",
        "text-white text-sm capitalize",
        "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Item;
