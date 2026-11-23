import { useState } from "react"
import Popup from "./Popup"

const CopyHandler = () => {
  const [name, setName] = useState("")
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(name);
    setCopied(true)
    setInterval(() => {
      setCopied(false)
    }, 2000);
  }
  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter anything"/>
      <button onClick={handleCopy}>Copy</button>
      {copied && <Popup />}
    </div>
  )
}
export default CopyHandler