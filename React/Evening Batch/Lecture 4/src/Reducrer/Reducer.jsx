import { useReducer, useState } from "react";
// const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.num;
    case "decrement":
      return state - action.num;
    default:
      return state ** action.num;
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button onClick={() => dispatch({ type: "increment", num: num })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", num: num })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "random", num: num })}>
        Random
      </button>
      <h2>{state}</h2>
    </div>
  );
};
export default Reducer;
