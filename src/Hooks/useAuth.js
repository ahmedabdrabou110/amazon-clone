import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

export const useAuth = () => {
  return useContext(GlobalContext);
};
