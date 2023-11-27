import  { createContext, useContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'


const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
}


export const Context = createContext( )

export const useGlobalState = () => {
   const context = useContext(Context)
   return context
}

export const GlobalProvider = ({children}) => {

  const [state, dispatch] = useReducer( AppReducer, initialState )


  useEffect(()=>{
    localStorage.setItem('transactions', JSON.stringify(state.transactions))
  },[state])

  

    const addTransacton = ( transaction /*= amount, description */) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
        console.log(state.transactions);
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
        console.log(state.transactions);
    }

   
    return(
        <Context.Provider value={{
            transactions : state.transactions,
            addTransacton,
            deleteTransaction,
        }}>
            {children}
        </Context.Provider>
    )
}