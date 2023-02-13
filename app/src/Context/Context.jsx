import { useReducer, createContext } from "react";
import { reducerFunc } from "./Reducer";

export const GlobalContext = createContext(null);

export const ContextWrapper = ({ children }) => {
   let data = {
      user: {},
      isLogin: false,
      haveAccount: true
   }
   const [state, dispatch] = useReducer(reducerFunc, data)
   return (
      <GlobalContext.Provider value={{ state, dispatch }}>
         {children}
      </GlobalContext.Provider>
   )
}