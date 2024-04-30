import { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import { all, create } from "mathjs";
// import { math } from "mathjs"; // Import math.js

interface Btn {
  [index: string]: (string | number)[];
}

interface Prop {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  level: number;
}

function Body({ setValue, level }: Prop) {
  const [expression, setExpression] = useState("");

  const btns: Btn = {
    item: [7, 8, 9, "Del", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*"],
  };

  // const config;

  const handleButtonClick = (value: string | number) => {
    if (value === "Del") {
      setExpression((prev) => prev.slice(0, -1)); // Remove last character

      setValue((prev) => prev.slice(0, -1));
    } else {
      setExpression((prev) => prev + value); // Concatenate clicked value
      setValue((prev) => prev + value.toString());
    }
  };

  function handleReset() {
    setExpression("");
    setValue("");
  }

  const config = {};
  const math = create(all, config);

  const computeExpression = useCallback(() => {
    if (!expression) return;
    try {
      const result = math.evaluate(expression);
      setExpression(String(result));
      // setValue(() => String(result)); // Use callback form of setState
    } catch (error) {
      setExpression("Invalid math expression");
      setValue("Invalid math expression");
    }
  }, [expression, math, setValue]);

  // setValue(expression);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        computeExpression();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    setValue(expression);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [computeExpression, expression, setValue]);

  console.log();

  const bg =
    level === 1
      ? "bg-theme1-themeToggleKeypadBackground"
      : level === 2
      ? "bg-theme2-themeToggleKeypadBackground"
      : "bg-theme3-themeToggleKeypadBackground";

  const bgUniq =
    level === 1
      ? "bg-theme1-themeKeyBackground"
      : level === 2
      ? "bg-theme2-themeKeyBackground"
      : "bg-theme3-themeKeyBackground";

  const borderUniq =
    level === 1
      ? "border-theme1-themeKeyShadow"
      : level === 2
      ? "border-theme2-themeKeyShadow"
      : "border-theme3-themeKeyShadow";
  return (
    <div className={`${bg} w-full p-8 rounded-md`}>
      <div className="grid grid-cols-4 gap-2 sm:gap-8">
        {btns.item.map((btn: string | number, i: number) => (
          <Button
            type={i === 3 ? "unique" : ""}
            size="small"
            key={i}
            className={
              i === 3
                ? `font-bold sm:text-2xl text-xl sm:h-16 h-10 px-2 rounded-md border-b-[4px] ${bgUniq} ${borderUniq} text-theme1-textScreen`
                : ""
            }
            onClick={() => handleButtonClick(btn)}
            level={level}
          >
            {btn}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-8 mt-8">
        <Button
          type="unique"
          size="big"
          className={`${bgUniq} ${borderUniq} sm:h-16 rounded-md uppercase text-xl sm:text-2xl text-theme1-textScreen h-10  font-extrabold`}
          onClick={handleReset} // Reset expression
        >
          reset
        </Button>
        <Button
          type="unique"
          size="big"
          className={`bg-theme${level}-themeToggleEqH sm:h-16 rounded-md uppercase text-xl sm:text-2xl h-10 font-extrabold`}
          onClick={computeExpression} // Set expression value
        >
          =
        </Button>
      </div>
    </div>
  );
}

export default Body;
