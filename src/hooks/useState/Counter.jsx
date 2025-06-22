import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => {
        return count > 0 ? setCount(count - 1) : setCount(0);
    };
  return (
    <div className='border border-green-900 m-4 p-4 rounded-lg shadow-md bg-white'>
        <h1>Counter</h1>
       <div className='border border-green-900 m-4 p-4 rounded-lg shadow-md bg-green-100'>
         <p>Counter is a simple component that demonstrates the use of state in React.</p>
        <p>It allows you to increment and decrement a counter value.</p>
       </div>
       <div className=' text-center border border-green-900 m-4 p-4 rounded-lg shadow-md bg-green-50'>
        <button onClick={increment} className=' cursor-pointer bg-green-500 text-white p-2 rounded m-2'>Increment</button>
        <button onClick={decrement} className='cursor-pointer bg-red-500 text-white p-2 rounded m-2'>Decrement</button>
        <p className='text-lg font-bold'>Current Count: {count}</p>
       </div>
    </div>
  )
}

export default Counter
