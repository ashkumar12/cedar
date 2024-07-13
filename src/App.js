import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { PAGES } from './constants';
import HomePage from './components/HomePage';
import PaymentPage from './components/PaymentPage';

function App() {
  const [pageNum, setPageNum] = useState(PAGES.HOMEPAGE);

  // Mock data
  const amountDue = '$600.00';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {pageNum === PAGES.HOMEPAGE && (
        <HomePage setPageNum={setPageNum} amountDue={amountDue} />
      )}
      {pageNum === PAGES.PAYMENT && (
        <PaymentPage setPageNum={setPageNum} amountDue={amountDue} />
      )}
      {pageNum === PAGES.CONFIRMATION && (
        <div className="confirmation">
          <div>Thank you for your payment!</div>
        </div>
      )}
    </div>
  );
}

export default App;
