import { useState } from "react";

export const usePositionExp = () => {
  const [positionExp, setPositionExp] = useState("");

  const handlePositionExp = (e) => setPositionExp(e.target.value);

  return { positionExp, handlePositionExp, setPositionExp };
};
