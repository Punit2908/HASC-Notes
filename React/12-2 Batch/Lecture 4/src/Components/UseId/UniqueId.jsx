import { useId } from "react"

const UniqueId = () => {
  const id = useId()
  // const id2 = useId()
  return (
    <div>
      <h2>{id}</h2>
      <label htmlFor={`${id}-email1`}>Email</label>
      <input type="text" id={`${id}-email1`} />
      <label htmlFor={`${id}-email2`}>Email</label>
      <input type="text" id={`${id}-email2`} />
    </div>
  )
}
export default UniqueId