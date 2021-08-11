// imports
import React, { 
    useContext, 
    createContext, 
    useReducer 
} from 'react';

// setting an init state of the context
export const StateContext = createContext({});

// the types of the props
interface stateProviderProps{
    reducer: any;
    initialState: any;
}

// the context provider
export const StateProvider: React.FC<stateProviderProps> = ({ reducer, initialState, children }) => {
    return(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)};

// a hook used to use the user context
export const useStateValue = () => useContext<any>(StateContext as any);