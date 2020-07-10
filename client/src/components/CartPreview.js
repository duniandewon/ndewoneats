import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uiContext } from '../context/ui/UiState';
import { Link } from 'react-router-dom';

import Cart from './Cart';

const CartPreview = ({ cart, auth }) => {
  const { items, subtotal } = cart;
  const { isAuth, user } = auth;

  const { updateStep } = useContext(uiContext);

  return (
    <section className='checkout-steps cart-preview'>
      <div className='left'>
        <Cart />
        <Fragment>
          {/* Show if cart length > 0 and total > 75K */}
          {items.length > 0 && subtotal > 75000 && (
            <Link to='/menu/promo' class='link'>
              Continue Shopping
            </Link>
          )}
        </Fragment>
        <div className='note'>
          <div className='input-field'>
            <input
              type='text'
              name='note'
              placeholder='Add notes to your order...'
            />
          </div>
        </div>
      </div>
      <div className='right'>
        <h3>Total</h3>
        <h2>Rp. {subtotal}</h2>
        <Fragment>
          {subtotal < 75000 && (
            <p>You should have an order with minumum amount of Rp 75,000.</p>
          )}
        </Fragment>
        <Fragment>
          {(items.length === 0 || subtotal < 75000) && (
            <Link to='/menu/promo' className='link'>
              Continue Shopping
            </Link>
          )}
        </Fragment>
        <Fragment>
          {/* If user is logged in show check out button else show login button */}
          {isAuth && user ? (
            // Show check out button if cart length is greater than 0 and amount is greater than 75K
            items.length > 0 &&
            subtotal > 75000 && (
              <button
                className='btn primary'
                onClick={() => updateStep('next')}
              >
                check out
              </button>
            )
          ) : (
            <Link to='/login' className='btn block primary'>
              login to order
            </Link>
          )}
        </Fragment>
      </div>
    </section>
  );
};

CartPreview.propTypes = {
  cart: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  auth: state.auth,
});

export default connect(mapStateToProps)(CartPreview);
