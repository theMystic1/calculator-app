interface levelProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

function Header({ level, setLevel }: levelProps) {
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
    <header
      className={`w-full flex justify-between items-center text-theme${level}-textScreen`}
    >
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
            className={`w-full h-5 rounded-2xl bg-theme${level}-themeScreenBackground flex items-center p-1`}
          >
            <div
              className={`rounded-full bg-theme${level}-themeToggleEqH h-3 w-3 absolute ${
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
