import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import UseData from "./Context/UseData";
import ComponentA from "./Props Drilling/ComponentA";
import { createContext } from "react";

export const data = createContext();
export const data1 = createContext();
const App = () => {
  let name = "Batman";
  let age = 23;
  return (
    <div>
      {/* <data.Provider value={name}>
        <data1.Provider value={age}>
          <ComponentA />
          <Example1 />
        </data1.Provider>
      </data.Provider> */}
      {/* <data.Provider value={{name,age}}>
        <Example1 />
      </data.Provider> */}
      {/* <UseData>
        <Example2 />
      </UseData> */}
      <Example2 />
    </div>
  );
};
export default App;
