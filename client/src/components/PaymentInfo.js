import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { uiContext } from '../context/ui/UiState';

import { placeOrder } from '../redux/actions/orderActions';
import { clearCart } from '../redux/actions/cartActions';

import MiniCartItem from './MiniCartItem';
import PaymentSummary from './PaymentSummary';
import PaymentOptions from './PaymentOptions';

const PaymentInfo = (props) => {
  const { items, subtotal, shippingAddress, placeOrder } = props;

  const { toggleUi } = useContext(uiContext);

  const [Order, setOrder] = useState({
    total: 0,
    ppn: 0,
    paymentMethod: 'cod',
  });

  const { total, ppn, paymentMethod } = Order;

  const createOrder = () => {
    toggleUi('modal');
    placeOrder({ items, shippingAddress, total, paymentMethod });
  };

  useEffect(() => {
    const ppn = subtotal / 10;
    const total = subtotal + ppn;

    setOrder({ ...Order, ppn, total });

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
        <PaymentSummary subtotal={subtotal} ppn={ppn} total={total} />
      </div>
      <div className='right'>
        <h2>Deliver to</h2>
        <p className='address'>{shippingAddress}</p>
        <div className='payment-method'>
          <h2>pay with:</h2>
          <PaymentOptions Order={Order} setOrder={setOrder} />
        </div>
        <a href='#!' className='btn block primary' onClick={createOrder}>
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

export default connect(mapStateToProps, { placeOrder, clearCart })(PaymentInfo);
