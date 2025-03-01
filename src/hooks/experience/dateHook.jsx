import { useState } from "react";

export const useDateExp = () => {
  const [startExp, setStartExp] = useState("");
  const handleStartExp = (e) => setStartExp(e.target.value);

  const [endExp, setEndExp] = useState("");

  const handleEndExp = (e) => setEndExp(e.target.value);

  return {
    startExp,
    handleStartExp,
    endExp,
    handleEndExp,
    setStartExp,
    setEndExp,
  };
};
