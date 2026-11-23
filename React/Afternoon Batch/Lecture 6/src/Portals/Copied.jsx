import {createPortal} from "react-dom"

const Copied = () => {
  const style = {
    position: 'fixed',
    top: '10px',
    right: '100',
    background: 'green',
    color: 'white',
    padding: '10px',
    height: '50px',
    width: '100px',
    zIndex: '1',
    borderRadius: '5px'
  }
  let portal = document.getElementById('portal')
  return createPortal(
    <div style={style}>
      <h1>Copied</h1>
    </div>,portal
  )
}
export default Copied