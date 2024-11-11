import './App.css';
import React, { useState } from 'react';
import Summary from './components/Summary';
import AddExpenses from './components/AddExpenses';
import ExpensesList from './components/ExpensesList';

function App() {
  const [budget, setBudget] = useState(1000);
  const [balance, setBalance] = useState(100);
  const [expenses, setExpenses] = useState([]);

  const addExpenses = (expensesDetails, expensesAmount) => {
    const newExpense = { expensesDetails, expensesAmount: Number(expensesAmount) };
    
    setExpenses([...expenses, newExpense]);
    setBalance(balance - newExpense.expensesAmount);
  };

  const deleteExpenses = (deleteExpenseDetails) => {
    const deletedExpense = expenses.find(exp => exp.expensesDetails === deleteExpenseDetails);
    if (deletedExpense) {
      setBalance(balance + deletedExpense.expensesAmount);
      setExpenses(expenses.filter(exp => exp.expensesDetails !== deleteExpenseDetails));
    }
  };

  return (
    <div className="container">
      <h2 className='title'>Expenses Tracker</h2>

      {/* Overall Transaction Details */}
      <Summary budget={budget} balance={balance} />

      {/* Add Transaction */}
      <AddExpenses addExpenses={addExpenses} />

      {/* Show Transactions */}
      <ExpensesList expenses={expenses} deleteExpenses={deleteExpenses} />
    </div>
  );
}

export default App;
