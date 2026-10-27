import { useState , useContext } from "react"
import { Data } from "./UserProvider"
import UserProfile from "./UserProfile"
const Login = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const {setUser} = useContext(Data)
  const handleLogin = () => {
    // console.log("Login")
    // console.log(user)
    if(name === "Batman"){
      setUser({name, password})
    }else{
      alert("Invalid Credentials")
    }
    // console.log(user)
  }
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}
export default Login