import { useState } from "react";
import { OnlinePresence } from "../../../mockData";

const useGeneral = () => {
  const [onlineData, setOnlineData] = useState<IOnlinePresence[]>(OnlinePresence);
  return { onlineData };
};
export default useGeneral;
