import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    
    setCount(count+1);
  }

    const clickHandler1 = () => {
    
      setCount(count-1);
  
    }
  
 

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={clickHandler} > Increase </button>
      <button onClick={clickHandler1} > Decrease</button>
    </>
  )
}

export default App
