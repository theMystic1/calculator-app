import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [level, setLevel] = useState<number>(1);

  useEffect(
    function () {
      if (level === 1) {
        document.documentElement.classList.add("bg-theme1-themeMainBackground");
        document.documentElement.classList.remove(
          "bg-theme2-themeMainBackground"
        );
        document.documentElement.classList.remove(
          "bg-theme3-themeMainBackground"
        );
      }
      if (level === 2) {
        document.documentElement.classList.remove(
          "bg-theme1-themeMainBackground"
        );
        document.documentElement.classList.add("bg-theme2-themeMainBackground");
        document.documentElement.classList.remove(
          "bg-theme3-themeMainBackground"
        );
      }

      if (level === 3) {
        document.documentElement.classList.remove(
          "bg-theme1-themeMainBackground"
        );
        document.documentElement.classList.remove(
          "bg-theme2-themeMainBackground"
        );
        document.documentElement.classList.add("bg-theme3-themeMainBackground");
      }
    },
    [level]
  );

  return (
    <div
      className={` w-screen h-screen text-theme1-themeTextCreen flex justify-center  pt-20`}
    >
      <Calculator level={level} setLevel={setLevel} />
    </div>
  );
}

export default App;
