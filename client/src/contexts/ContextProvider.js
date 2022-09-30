import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export  function ContextProvider({ children  }){
    const [activeMenu, setActiveMenu] = useState(true);
    return(
        <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
            {children}
        </StateContext.Provider>
    );
}

// getting the data from the context by using the context (specifically
// at the StateContext)
export const useStateContext = () => useContext(StateContext);