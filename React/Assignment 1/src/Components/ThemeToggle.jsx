import React, { useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState(true)
    const lightTheme = {
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '10px'
    }
    const darkTheme = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '10px'
    }
  return (
    <div style={theme ? lightTheme : darkTheme}>
      <button onClick={() => setTheme(!theme)}>{theme? 'Dark Mode':'Light Mode'}</button>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cumque earum illum harum necessitatibus quisquam et aspernatur quidem obcaecati. Vel adipisci ducimus quidem, sunt illum dolorum odio distinctio minus sit?</div>
    </div>
  )
}

export default ThemeToggle
