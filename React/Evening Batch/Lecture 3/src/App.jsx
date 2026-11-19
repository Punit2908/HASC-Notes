import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";
import Example4 from "./Components/Example4";
import Example5 from "./Components/Example5";
import Questions from "./Components/Questions";
import Todo from "./Components/Todo";
import Example6 from "./Hooks/Example6";
import Example7 from "./Hooks/Example7";

const App = () => {
  const name = "Batman";
  const age = 23;
  return (
    <div>
      {/* <Example1 name={name} age={age} /> */}
      {/* <Example2>
        <h2>Name: Batman</h2> 
        <h2>Age: 23</h2>
        <div>Hello How are you?</div>
      </Example2> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      {/* <Todo /> */}
      {/* <Questions /> */}
      {/* <Example5 name={name} age={age}/> */}
      {/* <Example5>
        <h2>Name: Batman</h2>
        <h2>Age: 23</h2>
      </Example5> */}
      {/* <Example6 /> */}
      <Example7 />
    </div>
  );
};
export default App;
