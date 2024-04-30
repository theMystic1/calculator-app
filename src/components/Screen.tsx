import React, { useEffect, useRef } from "react";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  level: number;
}

function Screen({ value, setValue, level }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value.replace(/[^\d.+\-*/()]/g, "");

    setValue(newValue);
  }

  return (
    <input
      className={`h-24 bg-theme${level}-themeScreenBackground w-full rounded-md my-10 border-0 outline-0 text-right text-2xl p-4 font-extrabold text-theme${level}-textScreen`}
      value={value}
      onChange={handleInputChange}
      ref={inputRef}

      // pattern="[0-9]*"
    />
  );
}

export default Screen;
