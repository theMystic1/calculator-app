import { ReactNode } from "react";

interface ListProps {
  type: string;
  size: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  level?: number;
}

function Button({
  type,
  size,
  children,
  className,
  onClick,
  level,
}: ListProps) {
  if (type === "unique")
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );

  if (type === "unique" && size === "small")
    return <button onClick={onClick}>{children}</button>;

  return (
    <button
      className={`bg-theme${level}-themeBtn text-theme${level}-text font-bold text-2xl h-16 rounded-md border-b-[4px] border-theme${level}-themeBtnShadow`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
