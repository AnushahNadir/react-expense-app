
import React, { createContext, useReducer } from 'react';
//import The app reducer
import AppReducer from './AppReducer.js';

//Create initial state

const initialState = {
    transactions: [
        {id: 1, description: "Income 1", transactionAmount: 1000},
        {id: 2, description: "Expense 1", transactionAmount: -100},
        {id: 3, description: "Income 2", transactionAmount: 2000},
        {id: 4, description: "Expense 2", transactionAmount: -500}

    ]
}

// Create global context

export const GlobalContext = createContext(initialState);

// Actions

function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

//Create a provider for the global context
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value = {
            {
                transactions: state.transactions, 
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}