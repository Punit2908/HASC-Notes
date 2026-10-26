import {Data} from "../../App"
const ComponentC = () => {
  return (
    <Data.Consumer>
      {(name)=> <div>I am {name}</div>}
    </Data.Consumer>
  )
}
export default ComponentC