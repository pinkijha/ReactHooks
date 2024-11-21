import React, { useEffect, useLayoutEffect } from 'react'

const UseLayout = () => {
    useEffect(()=>{
        console.log('meassge from useEffect')
    },[]);
    useLayoutEffect(()=>{
        console.log('message from useLyoutEffect')
    },[])
  return (
    <div>
      <h2>Testing</h2>
      {Array(10).fill('').map((item, index)=>{
        return <li key={index}>{Math.pow(Math.random(),2)}</li>
      })}
    </div>
  )
}

export default UseLayout
