import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MiniCartItems from './MiniCartItems';

const ShoppingCart = ({ amount, items, subtotal }) => {
  return (
    <div className='shopping-cart'>
      <Link to={items.length > 0 ? '/cart' : '/menu/promo'}>
        <i className='material-icons'>shopping_cart</i>
        <span className='cart-count'>{amount}</span>
      </Link>
      <MiniCartItems items={items} subtotal={subtotal} />
    </div>
  );
};

ShoppingCart.propTypes = {
  amount: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  amount: state.cart.amount,
  items: state.cart.items,
  subtotal: state.cart.subtotal,
});

export default connect(mapStateToProps)(ShoppingCart);
