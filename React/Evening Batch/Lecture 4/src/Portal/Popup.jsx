import {createPortal} from "react-dom"
const Popup = () => {
  const style = {
    position:"fixed",
    top:"10%",
    left:"80%",
    transform:"translate(-50%,-50%)",
    backgroundColor:"white",
    color:"lightgreen",
    borderRadius:"10px",
    border:"1px solid lightgreen",
    zIndex:"100",
    padding:"10px"
  }
  let portal = document.getElementById("portal")
  return createPortal(
    <div style={style}>
      <p>Your text is copied successfully</p>
    </div>,portal
  )
}
export default Popup