import React, { useCallback, useState } from 'react'

const Header = React.memo(({info, onClick, color}) => {
    console.log('headerCalling')
    return (
        <>
        <h1 style={{background : color? 'green' : '', color: color ? 'white' : 'black'}}>Header:  {info}</h1>
        <button onClick={onClick}>Clicke Me</button>
        </>
    )
});

const UseCallBack = () => {
    const [counter, setConter ] = useState(0);
    const [color, setColor] = useState(false);
    const name = 'Primary Header';
    const onBtnClicked = useCallback(() =>
        {
            console.log('btnClicked');
            setColor(pre=>!pre)
        },[]);

  return (
    <div>
        <Header info={name} onClick={onBtnClicked} color={color} />
        <h4>{counter}</h4>
      <p>Increment<button style={{margin:'10px'}} onClick={() => setConter(counter + 1)}> +</button></p>
      <p>Decrement<button style={{margin:'10px'}} onClick={() => setConter(counter - 1)}> -</button></p>
    </div>
  )
}

export default UseCallBack
