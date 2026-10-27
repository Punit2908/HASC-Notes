// import ContextApi from "./Components/ContextApi";
import CopyHandler from "./Components/CopyHandler";
import ComponentA from "./Components/Prop Drilling/ComponentA";
import { createContext } from "react";
import ComponentC from "./Components/Prop Drilling/ComponentC";
import Login from "./Components/Login";
import UserProvider from "./Components/UserProvider";
import UserProfile from "./Components/UserProfile";

export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  // const name = "Batman";
  // const age = 23;
  return (
    // <Data.Provider value={name}>
    //   <Data1.Provider value={age}>
    //     <ContextApi />
    //     {/* <ComponentC /> */}
    //   </Data1.Provider>
    // </Data.Provider>
    <UserProvider>
      <Login />
      <UserProfile />
    </UserProvider>
    
    
  );
};
export default App;
