import { createContext, useState } from "react"
export const Data = createContext()
const Userprovider = ({children}) => {
  const [user,setUser] = useState({})
  return (
    <div>
      <Data.Provider value={{user,setUser}}>
        {children}
      </Data.Provider>
    </div>
  )
}
export default Userprovider