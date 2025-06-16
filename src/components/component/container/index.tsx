import { cn } from "cn-func";

interface ContainerProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Container = ({
  children,
  style,
  id,
  className,
  onClick,
}: ContainerProps) => {
  return (
    <div
      id={id}
      style={style}
      onClick={onClick}
      className={cn("flex-1 flex flex-col gap-3 p-6 bg-white", className)}
    >
      {children}
    </div>
  );
};

export default Container;
