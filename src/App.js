import React from 'react';
import './App.css';
import { AccountSummary } from './components/AccountSummarty';
import { AddTransaction } from './components/AddTransaction';
import { AddTransactionHistory } from './components/AddTransactionHistory';
import { Balance } from './components/Balance';
import { Header } from './components/Header';

function App() {
  return (
    <div >
      <Header />
      <div className = "container">
        <Balance /> 
        <AccountSummary />
        <AddTransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
