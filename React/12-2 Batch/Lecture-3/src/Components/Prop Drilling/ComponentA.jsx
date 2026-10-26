import ComponentB from "./ComponentB"

const ComponentA = ({name}) => {
  return (
    <div>
      <ComponentB name={name} />
    </div>
  )
}
export default ComponentA