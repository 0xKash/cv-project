import { useState } from "react";

export const useExperience = () => {
  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      company: "Aramco",
      position: "Chemical Engineer",
      start: "14/2020",
      end: "14/2025",
      location: "Riyadh, Saudi Arabia",
      description:
        "A process engineer position focused on the development and imporvement of the alredy created processes on the Aramco HeadQuarter",
    },
  ]);

  return { experience, setExperience };
};
