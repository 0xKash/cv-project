import { useState } from "react";

export const useSchool = () => {
  const [school, setSchool] = useState("");

  const handleSchool = (e) => setSchool(e.target.value);

  return { school, handleSchool, setSchool };
};
