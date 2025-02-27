import { useState } from "react";

export const useDegree = () => {
  const [degree, setDegree] = useState("");

  const handleDegree = (e) => setDegree(e.target.value);

  return { degree, handleDegree, setDegree };
};
