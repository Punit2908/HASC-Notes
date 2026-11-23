import { useContext, useState } from "react"
import { Data } from "./Userprovider"
import User from "./User"

const Login = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const {user,setUser} = useContext(Data)
  const handleLogin = () => {
    // console.log("first")
    if(name === "" || password === ""){
      alert("Invalid Credentials")
    }
    if(name === "Batman" && password === "1234"){
      setUser({name:"Batman"})
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter the Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {user.name && <User />}
    </div>
  )
}
export default Login