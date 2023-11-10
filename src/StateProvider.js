//setup data layer
// we need this to keep track of the basket

import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside of a context
export const useStateValue = () => useContext(StateContext);