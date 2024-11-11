import React, { useState } from 'react';

const AddExpenses = ({ addExpenses }) => {
    const [expensesDetails, setExpensesDetails] = useState('');
    const [expensesAmount, setExpensesAmount] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (expensesDetails.trim() === '' || expensesAmount.trim() === '') {
            return; // Only submit if both fields are filled out
        }
        // Pass both details and amount to addExpenses function
        addExpenses(expensesDetails, expensesAmount);
        setExpensesDetails(''); // Clear the transaction details input
        setExpensesAmount(''); // Clear the amount input
    }

    return (
        <div className='search-bar'>
            <h3 className='title-new-expenses'>Add New Expenses</h3>
            <form className='add-transaction' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    className='input-details' 
                    placeholder='Transaction Details'
                    value={expensesDetails}
                    onChange={(e) => setExpensesDetails(e.target.value)}
                />
                <input 
                    type='number' 
                    className='input-amount' 
                    placeholder='Amount (RM)'
                    value={expensesAmount}
                    onChange={(e) => setExpensesAmount(e.target.value)}
                />
                <button type="submit" className='add-btn'>
                    <p>Add expense</p>
                </button>
            </form>
        </div>
    );
}

export default AddExpenses;
