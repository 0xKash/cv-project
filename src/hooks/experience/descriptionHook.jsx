import { useState } from "react";

export const useDescriptionExp = () => {
  const [descriptionExp, setDescriptionExp] = useState("");

  const handleDescriptionExp = (e) => setDescriptionExp(e.target.value);

  return { descriptionExp, handleDescriptionExp, setDescriptionExp };
};
