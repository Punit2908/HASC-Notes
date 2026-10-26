import {createPortal} from 'react-dom'
const Notification = ({copied}) => {
  return createPortal(
    <>
    {copied && <div style={{position: 'fixed', top: '10', right: '100', background: 'green', color: 'white', padding: '10px', height: '50px', width: '100px'}}>
      Added to clipboard
      </div>}
    </>,document.querySelector(".body")
  )
}
export default Notification