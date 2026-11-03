import { Children } from "react";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Props from "./Components/Props";
import { useState } from "react";
import Todo from "./Components/Todo";

const App = () => {
  const [num, setNum] = useState(0);
  const name = "Batman";
  const age = 23;
  return (
    <div>
      <Example1 />
      {/* <Props state={{ num, setNum }} /> */}
      {/* <Example2>
        <h2>Child 1</h2>
        <div>Hello</div>
      </Example2> */}
      {/* <Todo /> */}
    </div>
  );
};
export default App;
