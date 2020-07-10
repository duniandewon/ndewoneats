import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleAmount, removeFromCart } from '../redux/actions/cartActions';

const CartAmountToggler = ({ id, count, removeFromCart, toggleAmount }) => {
  return (
    <div className='cart-amount-toggler'>
      <button
        className='material-icons'
        onClick={() =>
          count === 1 ? removeFromCart(id) : toggleAmount(id, 'dec')
        }
      >
        remove
      </button>
      <span>{count}</span>
      <button
        className='material-icons'
        onClick={() => toggleAmount(id, 'inc')}
      >
        add
      </button>
    </div>
  );
};

CartAmountToggler.propTypes = {
  toggleAmount: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default connect(null, { toggleAmount, removeFromCart })(
  CartAmountToggler
);
