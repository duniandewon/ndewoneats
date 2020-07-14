import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/** Cart actions */
import { clearCart } from '../redux/actions/cartActions';

/** UI Context */
import { uiContext } from '../context/ui/UiState';

import Modal from '../layout/Modal';

const ThanksForShopping = (props) => {
  const { clearCart } = props;

  const { goToStep, toggleUi } = useContext(uiContext);

  return (
    <Modal
      modalOnClose={() => {
        clearCart();
        toggleUi('modal');
        goToStep(0);
      }}
    >
      <div className='thankyou-message'>
        <h1 className='thankyou-message__text'>
          We have recieved your order and will deliver it to you in 2 light
          years.
        </h1>
        <div className='thankyou-message__btn'>
          <Link to='/menu/promo' className='btn block primary'>
            Continue shopping
          </Link>
          <Link to='/my-account/order' className='btn block secondary'>
            View Orders
          </Link>
        </div>
      </div>
    </Modal>
  );
};

ThanksForShopping.propTypes = {
  clearCart: PropTypes.func.isRequired,
};

export default connect(null, { clearCart })(ThanksForShopping);
