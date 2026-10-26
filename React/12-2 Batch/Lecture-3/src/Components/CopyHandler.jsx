import { useState } from "react"
import Notification from "./Notification"

const CopyHandler = () => {
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)
  const handleCopy = () =>{
    navigator.clipboard.writeText(input)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleCopy}>Copy</button>
      <Notification copied={copied} />
    </div>
  )
}
export default CopyHandler