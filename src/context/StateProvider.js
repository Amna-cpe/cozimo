import React ,{createContext,useReducer ,useContext} from "react"
export const StateContext = createContext();

//PROVIDER
export const StateProvider =({Reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(Reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//TO USE INSUDE A COMPONENT
export const useStateValue = ()=> useContext(StateContext)