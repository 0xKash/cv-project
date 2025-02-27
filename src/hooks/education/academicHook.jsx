import { useState } from "react";

export const useAcademic = () => {
  const [academic, setAcademic] = useState([]);

  return { academic, setAcademic };
};
