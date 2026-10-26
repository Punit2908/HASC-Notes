const App = () => {
  const num = 10
  const name = "Bruce"
  function greet(){
    console.log("Batman")
    return "Hello How are you?"
  }
  return (
    <>
      <h2>Hello I am Batman</h2>
      <h3>I am from Gotham City</h3>
      <h4>My name is {name}</h4>
      <h4>I am {num} years old.</h4>
      <p>{greet()}</p>
      <p>{2+4+4}</p>
    </>
  )
}
export default App