import React, { useState } from 'react';
import './PaymentModule.scss';
import alert from '../../alert.svg';
import check from '../../check.svg';

const FORM_FIELDS = {
  cardNum: 'Card Number',
  expiry: 'Expires (MM/YY)',
  securityCode: 'Security code (CVV)',
  name: 'Name on card',
  zipCode: 'Zip code',
};

const PaymentField = ({ property, showError, formData, enterMockData }) => {
  return (
    <div className="flex-column payment-field">
      <span>{FORM_FIELDS[property]}</span>
      <div className="rel">
        <input
          className={showError ? 'error' : ''}
          type="text"
          onClick={enterMockData}
          value={formData[property]}
        />
        {showError && (
          <div className="icon">
            <img src={alert} alt="alert-logo" />
          </div>
        )}
        {formData[property] && (
          <div className="icon">
            <img src={check} alt="alert-logo" />
          </div>
        )}
      </div>
      {showError && <div className="error">This field is required</div>}
    </div>
  );
};

const PaymentModule = ({ setActiveStep }) => {
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    cardNum: '',
    expiry: '',
    securityCode: '',
    name: '',
    zipCode: '',
  });

  const enterMockData = () => {
    setShowError(false);
    setFormData({
      cardNum: '4242 4242 4242 4242',
      expiry: '02/25',
      securityCode: '222',
      name: 'Taylor Hughes',
      zipCode: '11013',
    });
  };

  const validateForm = () => {
    setShowError(false);
    let isError = false;
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        setShowError(true);
        isError = true;
        return;
      }
    });

    if (isError) {
      return;
    }

    setActiveStep(2);
  };

  return (
    <div className="flex-column payment-module">
      <PaymentField
        property="cardNum"
        onChange={null}
        formData={formData}
        showError={showError}
        enterMockData={enterMockData}
      />
      <div>
        <PaymentField
          property="expiry"
          onChange={null}
          formData={formData}
          showError={showError}
          enterMockData={enterMockData}
        />
        <PaymentField
          property="securityCode"
          onChange={null}
          formData={formData}
          showError={showError}
          enterMockData={enterMockData}
        />
      </div>
      <PaymentField
        property="name"
        onChange={null}
        formData={formData}
        showError={showError}
        enterMockData={enterMockData}
      />
      <PaymentField
        property="zipCode"
        onChange={null}
        formData={formData}
        showError={showError}
        enterMockData={enterMockData}
      />
      <button className="continue-btn" onClick={validateForm}>
        Continue
      </button>
    </div>
  );
};

export default PaymentModule;
