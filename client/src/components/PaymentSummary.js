import React from 'react';

const PaymentSummary = ({ subtotal, ppn, total }) => {
  return (
    <div className='payment-summary'>
      <p className='payment-summary__item'>Subtotal</p>
      <p className='payment-summary__item'>{subtotal}</p>
      <p className='payment-summary__item'>Delivery fee</p>
      <p className='payment-summary__item'>0</p>
      <p className='payment-summary__item'>PPN 10%</p>
      <p className='payment-summary__item'>{ppn}</p>
      <h2 className='payment-summary__item total'>Total</h2>
      <h2 className='payment-summary__item total'>{total}</h2>
    </div>
  );
};

export default PaymentSummary;
