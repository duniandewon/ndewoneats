import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MiniCartItem from './MiniCartItem';

const PaymentInfo = (props) => {
  const { items, subtotal, shippingAddress } = props;

  const [Order, setOrder] = useState({
    total: 0,
    ppn: 0,
    items: null,
    shippingAddress: '',
    paymentMethod: 'cod',
  });

  useEffect(() => {
    const ppn = subtotal / 10;
    const total = subtotal + ppn;

    setOrder({ ...Order, ppn, total, shippingAddress, items });

    // eslint-disable-next-line
  }, []);

  return (
    <section className='checkout-steps payment-info'>
      <div className='left'>
        <h2>Order summary</h2>
        <div className='cart-items'>
          {items.map((item) => (
            <MiniCartItem key={item._id} item={item} />
          ))}
        </div>
        <div className='payment-summary'>
          <p className='payment-summary__item'>Subtotal</p>
          <p className='payment-summary__item'>{subtotal}</p>
          <p className='payment-summary__item'>Delivery fee</p>
          <p className='payment-summary__item'>0</p>
          <p className='payment-summary__item'>PPN 10%</p>
          <p className='payment-summary__item'>{Order.ppn}</p>
          <h2 className='payment-summary__item total'>Total</h2>
          <h2 className='payment-summary__item total'>{Order.total}</h2>
        </div>
      </div>
      <div className='right'>
        <h2>Deliver to</h2>
        <p className='address'>{shippingAddress}</p>
        <div className='payment-method'>
          <h2>pay with</h2>
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
        </div>
        <a href='#!' className='btn block primary'>
          Place my oreder
        </a>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
  subtotal: state.cart.subtotal,
  shippingAddress: state.cart.shippingAddress,
});

export default connect(mapStateToProps)(PaymentInfo);
