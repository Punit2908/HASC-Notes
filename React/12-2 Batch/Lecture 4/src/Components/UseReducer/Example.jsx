import { useReducer } from "react"
const initialState = 0
function reducer(state,action){
  switch(action){
    case "increment":
      return initialState + 3
    case "decrement":
      return initialState - 3
    default:
      return initialState
  }
}
const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}
export default Example