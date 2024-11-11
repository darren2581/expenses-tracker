import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  return (
    <div className="container">
      <h2 className='title'>Expenses Tracker</h2>

      {/* Overall Transaction Details*/}
        <div className='overall-details'>
        <div className='budjet'>
          <h4>Budjet</h4>
          <p className='detail-amount'>RM100.00</p>
        </div>
        <div className='remaining'>
          <h4>Balance</h4>
          <p className='detail-amount'>RM100.00</p>
        </div>
        <div className='expenses'>
          <h4>Expenses</h4>
          <p className='detail-amount'>RM100.00</p>
        </div>
      </div>

      {/* Add Transaction */}
      <div className='search-bar'>
        <h3 className='title-new-expenses'>Add New Expenses</h3>
        <form className='add-transaction'>
          <input type='text' 
            className='input-name' 
            placeholder='Enter Transaction Name'
          />
          <input type='text' 
            className='input-details' 
            placeholder='Enter Transaction Details'
          />
        </form>
        <button type="submit" className='add-btn'>
          <p>Add expenses</p>
        </button>
      </div>

      {/* Show Transactions */}
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
            <li className='expenses-item'>
              <span className='name'>Electricity Bill </span>
              <span className='amount'>RM30.00</span>
              <button className='del-btn'>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </li>
            <li className='expenses-item'>
              <span className='name'>Maxis Bill </span>
              <span className='amount'>RM100.00</span>
              <button className='del-btn'>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </li>
            <li className='expenses-item'>
              <span className='name'>Lunch </span>
              <span className='amount'>RM30.00</span>
              <button className='del-btn'>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
