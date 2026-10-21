const App = () => {
  let num = 10
  function greet(){
    return 'Hello I am Batman'
  }
  return (
    <>
      <h2>Hello</h2>
      <h3>{greet()}</h3>
    </>

  )
}
export default App