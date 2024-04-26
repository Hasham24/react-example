import { useState } from "react";

const useAccountSetup = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  return { phoneNumber, setPhoneNumber };
};
export default useAccountSetup;
