import Login from "./Login/Login"
import Userprovider from "./Login/Userprovider"
import CopyManager from "./Portals/CopyManager"

const App = () => {
  return (
    <div>
      {/* <CopyManager /> */}
      <Userprovider>
        <Login />
      </Userprovider>
    </div>
  )
}
export default App