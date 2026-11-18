import ComponentA from "./Props Drilling/ComponentA";
import { createContext } from "react";
import ComponentC from "./Props Drilling/ComponentC";

export const data = createContext();
export const data1 = createContext();
const App = () => {
  let name = "Batman";
  let age = 23;
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <ComponentA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};
export default App;
