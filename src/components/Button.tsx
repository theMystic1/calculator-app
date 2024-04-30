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
  const bgTg =
    level === 1
      ? "bg-theme1-themeBtn"
      : level === 2
      ? "bg-theme2-themeBtn"
      : "bg-theme3-themeBtn";

  const text =
    level === 1
      ? "text-theme1-text"
      : level === 2
      ? "text-theme2-text"
      : "text-theme3-text";

  const border =
    level === 1
      ? "border-theme1-themeBtnShadow`"
      : level === 2
      ? "border-theme2-themeBtnShadow`"
      : "border-theme3-themeBtnShadow`";

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
      className={`${bgTg} ${text} font-bold sm:text-2xl text-xl sm:h-16 h-10 rounded-md border-b-[4px] ${border}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
