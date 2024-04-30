import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Screen from "./Screen";

interface levelProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

function Calculator({ level, setLevel }: levelProps) {
  const [value, setValue] = useState<string>("");

  return (
    <div className="w-80 sm:w-[520px]">
      <Header level={level} setLevel={setLevel} />
      <Screen value={value} setValue={setValue} level={level} />
      <Body setValue={setValue} level={level} />
    </div>
  );
}

export default Calculator;
