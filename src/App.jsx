import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('Blue')

  const clickHandler = () => {
    
    setColor(color === 'Blue' ? 'Red' : 'Blue');

  }
 

  return (
    <>
      <h1>My favourite color is {color}</h1>
      <button onClick={clickHandler} >{color === 'Blue' ? 'Red' : 'Blue'}</button>
    </>
  )
}

export default App
