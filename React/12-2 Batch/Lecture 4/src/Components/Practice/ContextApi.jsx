import { createContext } from "react";
import Profile from "./Profile";
export const Data = createContext();
export const Data2 = createContext();
const ContextApi = ({ children }) => {
  const name = "Batman";
  const age = 23;

  return (
    <Data.Provider value={name}>
      <Data2.Provider value={age}>{children}</Data2.Provider>
    </Data.Provider>
  );
};
export default ContextApi;
