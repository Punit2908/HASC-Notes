import { useContext } from "react"
import { data } from "../App"

const Example1 = () => {
  const {name,age} = useContext(data)
  
  return (
    <div>
      <h1>Hello I am {name} and I am {age} years old</h1>
    </div>
  )
}
export default Example1