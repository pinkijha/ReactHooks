import React, { useReducer, useState } from 'react'
import '../App.css'
const UseReducer = () => {
    // const [count, setCount] = useState(0);
    const initialState = {count:0}
    
    const reducer = (state, action) =>{
        switch (action.type){
            case  'increase' : {
                return {count: state.count+1}

            }
            case  'decrease' : {
                return {count: state.count-1}
            }
            default :{
                return state
            }
        }      

    }    
    const [state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type:'increase'})}>Increase + </button>
      <button onClick={() => dispatch({type:'decrease'})}>Decrease - </button>
    </div>
  )
}

export default UseReducer
