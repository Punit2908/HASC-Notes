import { useId } from "react"

const Test = () => {
  const id = useId()
  const id2 = useId()
  const id3 = useId()
  return (
    <div>
      {id}
      <p>Second</p>
      {id2}
      <p>{id3}</p>
    </div>
  )
}
export default Test