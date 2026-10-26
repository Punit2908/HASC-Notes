import { useContext } from "react"
import {Data,Data1} from "../App"
const ContextApi = () => {
  const name = useContext(Data)
  const age = useContext(Data1)
  return (
    <div>
      {name} {age}
    </div>
  )
}
export default ContextApi