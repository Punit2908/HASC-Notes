import { createContext, useState } from "react"
export const Data = createContext();
const UseData = ({children}) => {
  const [name,setName] = useState("")
  return (
    <Data.Provider value={{name,setName}}>
      {children}
    </Data.Provider>
  )
}
export default UseData