import { useState } from "react";
import Copied from "./Copied";

const CopyManager = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(name);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>

      {copied && <Copied />}
    </div>
  );
};
export default CopyManager;
