import Navbar from "./Components/Navbar"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"

const App = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Recommended />
      <Products />
    </div>
  )
}
export default App