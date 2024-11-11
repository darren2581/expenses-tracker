const Summary = ({ budget, balance, expenses }) => {
    // Calculate the total expenses by summing up the amounts in the expenses array
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.expensesAmount, 0);
  
    return (
      <div className='overall-details'>
        <div className='budget'>
          <h4>Budget</h4>
          <p className='detail-amount'>RM{budget.toFixed(2)}</p>
        </div>
        <div className='remaining'>
          <h4>Balance</h4>
          <p className='detail-amount'>RM{balance.toFixed(2)}</p>
        </div>
        <div className='expenses'>
          <h4>Expenses</h4>
          <p className='detail-amount'>RM{totalExpenses.toFixed(2)}</p>
        </div>
      </div>
    );
  }
  
  export default Summary;
  