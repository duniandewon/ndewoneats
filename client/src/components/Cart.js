import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../redux/actions/cartActions';

import CartItem from './CartItem';

const Cart = ({ items, removeFromCart }) => {
  return (
    <table className='cart'>
      <tbody className='cart-items'>
        <tr className='cart__header'>
          <th className='cart__header--columns text-align-left' colSpan='2'>
            Item
          </th>
          <th className='cart__header--columns text-align-center'>quantity</th>
          <th className='cart__header--columns text-align-center'>subtotal</th>
          <th className='cart__header--columns' />
        </tr>
        <Fragment>
          {items.length > 0 &&
            items.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
        </Fragment>
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
