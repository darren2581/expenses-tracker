import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  return (
    <div className="container">
      <h2 className='title'>Expenses Tracker</h2>

        <div className='overall-details'>
        <div className='budjet'>
          <h4>Income</h4>
          <h5>RM100.00</h5>
        </div>
        <div className='remaining'>
          <h4>Balance</h4>
          <h5>RM70.00</h5>
        </div>
        <div className='expenses'>
          <h4>Expenses</h4>
          <h5>RM30.00</h5>
        </div>
      </div>

      <div className='transaction-list'>
        <div>
          <h3 className='title-expenses'>Expenses</h3>
          <ul>
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
