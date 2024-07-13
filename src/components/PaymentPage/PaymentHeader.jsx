import React, { useState } from 'react';
import './PaymentHeader.scss';

const PaymentHeader = ({
  active,
  stepNum,
  title,
  showTopBorder = false,
  showEdit = false,
  setStepNum,
}) => {
  return (
    <div
      className={`payment-header ${active ? 'active' : ''} ${
        showTopBorder ? 'top-border' : ''
      }`}
    >
      <div className="flex">
        <div className={`step-num ${active && !showEdit ? 'active' : ''}`}>
          {stepNum}
        </div>
        <div className={`title ${active ? 'active' : ''}`}>{title}</div>
      </div>
      {showEdit && (
        <button
          onClick={() => {
            setStepNum(1);
          }}
          className="edit-btn"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default PaymentHeader;
