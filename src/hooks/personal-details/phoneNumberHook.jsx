import { useState } from "react";

export const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("+34 645 22 73 18");

  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  return { phoneNumber, handlePhoneNumber };
};
