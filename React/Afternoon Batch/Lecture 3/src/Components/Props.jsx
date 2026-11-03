const Props = ({state}) => {
  const {num, setNum} = state
  // const {hello, age} = props
  // console.log(setNum)
  return (
    <div>
      {/* <h2>{hello}</h2>
      <h2>{age}</h2> */}
      <h2>{num}</h2>
      <button onClick={()=>setNum(num+1)}>Increment</button>
    </div>
  )
}
export default Props