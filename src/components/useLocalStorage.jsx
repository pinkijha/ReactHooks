import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initial) => {
    
    const [name, setName] = useState(
        localStorage.getItem(key)?
        localStorage.getItem(key): initial
    );
    useEffect(()=>{
        localStorage.setItem(key, name)
    },[key, name])
  return [name, setName]
}

export default useLocalStorage
