import { useReducer, useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + Number(action.num);
    default:
      return state * Number(action.num);
  }
};
const ReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const [input, setInput] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => Number(setInput(e.target.value))}
      />
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            num: input,
          })
        }
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "", num: input })}>Random</button>
    </div>
  );
};
export default ReducerHook;
