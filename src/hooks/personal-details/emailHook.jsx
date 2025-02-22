import { useState } from "react";

export const useEmail = () => {
  const [email, setEmail] = useState("example@example.com");

  const handleEmail = (e) => setEmail(e.target.value);

  return { email, handleEmail };
};
