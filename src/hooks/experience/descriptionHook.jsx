import { useState } from "react";

export const useDescriptionExp = () => {
  const [descriptionExp, setDescription] = useState("");

  const handleDescriptionExp = (e) => setDescription(e.target.value);

  return { descriptionExp, handleDescriptionExp };
};
