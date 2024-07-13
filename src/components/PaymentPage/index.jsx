import React, { useState } from 'react';
import './Payment.scss';
import { PAGES } from '../../constants';
import PaymentHeader from './PaymentHeader';
import PaymentModule from './PaymentModule';
import visaLogo from '../../visa.svg';

const PaymentPage = ({ amountDue, setPageNum }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="payment">
      <div className="payment--body">
        <PaymentHeader
          active
          setStepNum={setActiveStep}
          stepNum={1}
          title="Payment information"
          showEdit={activeStep === 2}
        />
        {activeStep === 1 && (
          <PaymentModule
            setActiveStep={setActiveStep}
            isOpen={activeStep === 1}
          />
        )}
        <PaymentHeader
          active={activeStep === 2}
          stepNum={2}
          title="Review and pay"
          showTopBorder
        />
        {activeStep === 2 && (
          <div className="flex-column review">
            <div className="payment-text">
              You’re about to make a payment of <span>{amountDue}</span>
            </div>
            <div className="flex-column payment-method">
              <span>Payment Method</span>
              <div className="text">
                <img src={visaLogo} className="visa-logo" alt="visa-logo" />
                Card ending in ••••4242
              </div>
            </div>
            <button
              className="continue-btn"
              onClick={() => setPageNum(PAGES.CONFIRMATION)}
            >
              Pay {amountDue}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
