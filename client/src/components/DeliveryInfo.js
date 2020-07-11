import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uiContext } from '../context/ui/UiState';

import { setShippingAddress } from '../redux/actions/cartActions';

import MyMap from '../map/MyMap';

const DeliveryInfo = ({ user, shippingAddress, setShippingAddress }) => {
  const [DeliveryInfo, setDeliveryInfo] = useState('');

  const { updateStep } = useContext(uiContext);

  const handleChange = (e) => setDeliveryInfo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShippingAddress(DeliveryInfo);
    updateStep('next');
    setDeliveryInfo('');
  };

  useEffect(() => {
    shippingAddress ? setDeliveryInfo(shippingAddress) : setDeliveryInfo('');
    // eslint-disable-next-line
  }, [shippingAddress]);

  return (
    <form className='checkout-steps delivery-info' onSubmit={handleSubmit}>
      <div className='left'>
        <h3>User info</h3>
        <div className='input-field'>
          <input
            type='text'
            name='name'
            placeholder='Full Name'
            value={user.name}
            readOnly
          />
        </div>
        <div className='input-field'>
          <input
            type='number'
            name='phone'
            placeholder='Phone Number'
            value={user.phone}
            readOnly
          />
        </div>
      </div>
      <div className='right'>
        <h2>Delivery Address</h2>
        <h3>1. Set the delivery location</h3>
        <p>Make sure the pinned location matches the delivery location</p>
        <div className='map'>
          <MyMap />
        </div>
        <h3>2. Provide the complete address</h3>
        <p>
          Provide additional notes or references if necessary. (example: "next
          to salon")
        </p>
        <div className='input-field'>
          <textarea
            name='address'
            id='address'
            cols='40'
            rows='40'
            placeholder='Please set the location on the map first before filling the shipping address.'
            value={DeliveryInfo}
            onChange={handleChange}
            required
          />
        </div>
        <button className='btn primary'>continue</button>
      </div>
    </form>
  );
};

DeliveryInfo.propTypes = {
  user: PropTypes.object.isRequired,
  shippingAddress: PropTypes.string.isRequired,
  setShippingAddress: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  shippingAddress: state.cart.shippingAddress,
});

export default connect(mapStateToProps, { setShippingAddress })(DeliveryInfo);
