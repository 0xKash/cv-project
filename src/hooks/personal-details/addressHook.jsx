import { useState } from "react";

export const useAddress = () => {
  const [address, setAddress] = useState("London, UK");

  const handleAddress = (e) => setAddress(e.target.value);

  return { address, handleAddress };
};
