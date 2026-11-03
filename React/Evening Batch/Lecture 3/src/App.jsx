import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";

const App = () => {
  const name = "Batman";
  const age = 23;
  return (
    <div>
      <Example1 name={name} age={age} />
      {/* <Example2>
        <h2>Name: Batman</h2> 
        <h2>Age: 23</h2>
        <div>Hello How are you?</div>
      </Example2> */}
      <Example3 />
    </div>
  );
};
export default App;
