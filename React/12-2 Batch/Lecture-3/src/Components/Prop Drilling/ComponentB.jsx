import ComponentC from "./ComponentC"

const ComponentB = ({name}) => {
  return (
    <div><ComponentC name={name}/></div>
  )
}
export default ComponentB