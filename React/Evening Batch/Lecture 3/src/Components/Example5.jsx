// const Example5 = ({name,age}) => {
//   // const {name} = props
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{age}</h2>
//     </div>
//   )
// }
// export default Example5

const Example5 = ({children}) => {
  return (
    <div>
      {children}
      <h2>Hello I am example 5</h2>
    </div>
  )
}
export default Example5