import { useState } from "react";
import Button from "./Button";

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
    item: [7, 8, 9, "Del", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x"],
  };

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

  return (
    <div
      className={`bg-theme${level}-themeToggleKeypadBackground w-full p-8 rounded-md`}
    >
      <div className="grid grid-cols-4 gap-8">
        {btns.item.map((btn: string | number, i: number) => (
          <Button
            type={i === 3 ? "unique" : ""}
            size="small"
            key={i}
            className={
              i === 3
                ? "font-bold text-2xl h-16 rounded-md border-b-[4px] bg-theme1-themeKeyBackground border-theme1-themeKeyShadow"
                : ""
            }
            onClick={() => handleButtonClick(btn)}
            level={level}
          >
            {btn}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Button
          type="unique"
          size="big"
          className="bg-theme1-themeKeyBackground border-theme1-themeKeyShadow h-16 rounded-md uppercase text-2xl  font-extrabold"
          onClick={handleReset} // Reset expression
        >
          reset
        </Button>
        <Button
          type="unique"
          size="big"
          className={`bg-theme${level}-themeToggleEqH h-16 rounded-md uppercase text-2xl  font-extrabold`}
          onClick={() => setValue(expression)} // Set expression value
        >
          =
        </Button>
      </div>
    </div>
  );
}

export default Body;
