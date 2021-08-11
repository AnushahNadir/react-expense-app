import React from 'react';
import './App.css';
import { AccountSummary } from './components/AccountSummary';
import { AddTransaction } from './components/AddTransaction';
import { AddTransactionHistory } from './components/AddTransactionHistory';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className = "container">
        <Balance /> 
        <AccountSummary />
        <AddTransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
