import './App.css';
import React from 'react';
import { useState } from 'react';
import Summary from './components/Summary';
import AddExpenses from './components/AddExpenses';
import ExpensesList from './components/ExpensesList';

function App() {
  return (
    <div className="container">
      <h2 className='title'>Expenses Tracker</h2>

      {/* Overall Transaction Details*/}
      <Summary />

      {/* Add Transaction */}
      <AddExpenses />

      {/* Show Transactions */}
      <ExpensesList />
    </div>
  );
}

export default App;
