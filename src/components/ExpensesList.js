const ExpensesList = () => {
  return (
    <div className='transaction-list'>
        <div>
          <h3 className='title-expenses'>Expenses</h3>
          <ul className='scrollable-list'>
            <li className='expenses-item'>
              <span className='name'>House loan </span>
              <span className='amount'>RM100.00</span>
              <button className='del-btn'>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default ExpensesList