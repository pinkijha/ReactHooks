import React, { createContext } from 'react'

export const UseContext = createContext();

const ContextProvider = (props) => {
    const name = 'pinki';
    const number = 98787666;
    return (
        <UseContext.Provider value={{name, number}}>
            {props.children}
        </UseContext.Provider>
    )

}

export default ContextProvider;
