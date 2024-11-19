import React from 'react';
import { useState } from 'react'

const UseState1 = () => {
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
      <button style={{color:'white', backgroundColor:'green', margin: '10px'}} onClick={clickHandler} > Increase </button>
      <button style={{color:'white', backgroundColor:'red'}} onClick={clickHandler1} > Decrease</button>
    </>
  )
}

export default UseState1
