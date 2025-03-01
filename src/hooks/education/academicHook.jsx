import { useState } from "react";

export const useAcademic = () => {
  const [academic, setAcademic] = useState([
    {
      id: crypto.randomUUID(),
      school: "London University",
      degree: "Chemical Engineering",
      start: "14/2016",
      end: "14/2020",
      location: "London, UK",
    },
  ]);

  return { academic, setAcademic };
};
