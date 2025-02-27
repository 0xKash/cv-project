import { useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState("");

  const handleLocation = (e) => setLocation(e.target.value);

  return { location, handleLocation, setLocation };
};
