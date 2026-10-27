import { createContext } from "react"
import { useState } from "react"
export const Data = createContext()
const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)

  return (
    <Data.Provider value={{user,setUser}}>
      {children}
    </Data.Provider>
  )
}
export default UserProvider