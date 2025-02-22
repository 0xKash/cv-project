/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export const usefullName = () => {
  const [fullname, setFullname] = useState("Mark");

  const handleFullname = (e) => {
    setFullname(e.target.value);
  };

  return { fullname, handleFullname };
};
