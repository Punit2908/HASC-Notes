import { createContext, useState } from "react"
import { data } from "../Data/db"
export const data1 = createContext()
const Context = ({children}) => {
  const [array,setArray] = useState([...data])
  const [name, setName] = useState("")
  const [recommendation, setRecommendation] = useState("")
  const [category, setCategory] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")

  return (
    <data1.Provider value={{array,setArray,name,setName, recommendation, setRecommendation, category,setCategory,color, setColor,price, setPrice}}>
      {children}
    </data1.Provider>
  )
}
export default Context