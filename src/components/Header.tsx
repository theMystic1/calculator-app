interface levelProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

function Header({ level, setLevel }: levelProps) {
  const bgScreen =
    level === 1
      ? "bg-theme1-themeScreenBackground"
      : level === 2
      ? "bg-theme2-themeScreenBackground"
      : "bg-theme3-themeScreenBackground";

  const bgTg =
    level === 1
      ? "bg-theme1-themeToggleEqH"
      : level === 2
      ? "bg-theme2-themeToggleEqH"
      : "bg-theme3-themeToggleEqH";

  const text =
    level === 1
      ? "text-theme1-textScreen"
      : level === 2
      ? "text-theme2-textScreen"
      : "text-theme3-textScreen";

  const minLevel: number = 1;
  const maxLevel: number = 3;

  function handleThemeClick() {
    if (level >= minLevel && level < maxLevel) {
      setLevel((prev) => prev + 1);
    }

    if (level === maxLevel) {
      setLevel(minLevel);
    }
  }
  return (
    <header className={`w-full flex justify-between items-center ${text}`}>
      <h1 className="font-extrabold text-2xl">calc</h1>

      <div className="flex gap-8 items-center ">
        <p className="uppercase font-extrabold">theme</p>
        <div
          className="w-16 relative cursor-pointer"
          onClick={handleThemeClick}
        >
          <div className="w-full flex gap-4 mb-1">
            <span>1</span> <span>2</span> <span>3</span>
          </div>
          <div
            className={`w-full h-5 rounded-2xl ${bgScreen} flex items-center p-1`}
          >
            <div
              className={`rounded-full ${bgTg} h-3 w-3 absolute ${
                level === 1
                  ? "translate-x-0"
                  : level === 2
                  ? "translate-x-4"
                  : "translate-x-10"
              } `}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
