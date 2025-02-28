import { useState } from "react";

export const useDate = () => {
  const [start, setStart] = useState("");
  const handleStart = (e) => setStart(e.target.value);

  const [end, setEnd] = useState("");

  const handleEnd = (e) => setEnd(e.target.value);

  return { start, handleStart, end, handleEnd, setStart, setEnd };
};
