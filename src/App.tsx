import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [level, setLevel] = useState<number>(1);

  return (
    <div
      className={`bg-theme${level}-themeMainBackground w-screen h-screen text-theme1-themeTextCreen flex justify-center  pt-20`}
    >
      <Calculator level={level} setLevel={setLevel} />
    </div>
  );
}

export default App;
