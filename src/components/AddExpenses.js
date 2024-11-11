const AddExpenses = () => {
  return (
    <div className='search-bar'>
        <h3 className='title-new-expenses'>Add New Expenses</h3>
        <form className='add-transaction'>
          <input type='text' 
            className='input-details' 
            placeholder='Transaction Details'
          />
          <input type='text' 
            className='input-amount' 
            placeholder='Amount (RM)'
          />
        </form>
        <button type="submit" className='add-btn'>
          <p>Add expenses</p>
        </button>
      </div>
  )
}

export default AddExpenses