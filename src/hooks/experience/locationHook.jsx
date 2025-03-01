import { useState } from "react";

export const useLocationExp = () => {
  const [locationExp, setLocationExp] = useState("");

  const handleLocationExp = (e) => setLocationExp(e.target.value);

  return { locationExp, handleLocationExp, setLocationExp };
};
