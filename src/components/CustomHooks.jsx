import React from 'react'
import useLocalStorage from './useLocalStorage'

const CustomHooks = () => {
    const [name, setName] = useLocalStorage ('userName', '')
    
    const [id, setId] = useLocalStorage ('userId', '')
  return (
    <div>
      <input type='text' placeholder='Enter Name' value={name} 
      onChange={(e)=> setName(e.target.value)}/>
      <h2>Hello, {name}</h2>
      <input type='text' placeholder='Enter Id' value={id} 
      onChange={(e)=> setId(e.target.value)}/>
      <h2>Your Id: {id}</h2>
    </div>
  )
}

export default CustomHooks
