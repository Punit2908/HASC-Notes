import { useContext } from "react"
import { Data } from "./Userprovider"

const User = () => {
  const {user} = useContext(Data)
  return (
    <div>
      <h1>Welcome {user.name}!</h1>
    </div>
  )
}
export default User