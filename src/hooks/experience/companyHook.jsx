import { useState } from "react";

export const useCompanyExp = () => {
  const [companyExp, setCompanyExp] = useState("");

  const handleCompanyExp = (e) => setCompanyExp(e.target.value);

  return { companyExp, handleCompanyExp, setCompanyExp };
};
