import { useContext } from "react"
import { Data } from "./UserProvider"

const User = () => {
  const {user} = useContext(Data)
  return (
    <div>
      <h1>Welcome back! {user.username}</h1>
    </div>
  )
}
export default User