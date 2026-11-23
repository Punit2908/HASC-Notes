import { useState,useContext } from "react"
import { Data } from "./UserProvider"
import User from "./User"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {user,setUser} = useContext(Data)

  const handleLogin = ()=>{
    if(username ==="" || password ===""){
      alert("Please fill all the fields")
      return
    }
    if(username === "Batman" && password === "Gotham"){
      setUser({username, password})
    }else{
      alert("Invalid Credentials")
    }
  }
  return (
    <div className="container">
      <label>Enter the username: {" "}
        <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter the username"/>
      </label>
      <label>Enter the password: {" "}
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter the password"/>
      </label>
      <button onClick={handleLogin}>Login</button>
      {user && <User />}
    </div>
  )
}
export default Login