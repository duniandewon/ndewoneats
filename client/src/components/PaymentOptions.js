import React from 'react';

const PaymentOptions = ({ Order, setOrder }) => {
  return (
    <div className='payment-options'>
      <div className='payment-option'>
        <input
          type='radio'
          name='paywith'
          id='cod'
          value='cod'
          checked={Order.paymentMethod === 'cod'}
          onChange={(e) =>
            setOrder({ ...Order, paymentMethod: e.target.value })
          }
        />
        <i className='material-icons'>done</i>
        <label htmlFor='cod'>COD</label>
      </div>
      <div className='payment-option'>
        <input
          type='radio'
          name='paywith'
          id='paypal'
          value='paypal'
          checked={Order.paymentMethod === 'paypal'}
          onChange={(e) =>
            setOrder({ ...Order, paymentMethod: e.target.value })
          }
        />
        <i className='material-icons'>done</i>
        <label htmlFor='paypal'>Paypal</label>
      </div>
    </div>
  );
};

export default PaymentOptions;
