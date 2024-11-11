import React from 'react';

const ExpensesList = ({ expenses, deleteExpenses}) => {
  return (
    <div className='transaction-list'>
        <div>
          <h3 className='title-expenses'>Expenses</h3>
          <ul className='scrollable-list'>
            {expenses.map((expenses) => (
                <li key={expenses.expensesDetails} className='expenses-item'>
                    <span className='name'>{expenses.expensesDetails}</span>
                    <span className='amount'>RM{expenses.expensesAmount}</span>
                    <button className='del-btn' onClick={() => deleteExpenses(expenses.expensesDetails)}>
                    <span className="material-symbols-outlined">delete</span>
                    </button>
                </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default ExpensesList