import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MiniCartItem from './MiniCartItem';

const MiniCartItems = ({ items, subtotal }) => {
  return (
    <div className='mini-cart-items'>
      {items && items.length > 0 ? (
        <Fragment>
          {items.map((item) => (
            <MiniCartItem key={item._id} item={item} withImage />
          ))}
          <div className='cart-subtotal'>
            <h3 className='cart-subtotal--text'>sub total</h3>
            <span className='cart-subtotal--total'>Rp. {subtotal}</span>
          </div>
          <Link to='/cart' className='btn block primary'>
            Go to cart
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <p style={{ marginBottom: '1.5rem' }}>Your cart is empty!</p>
          <Link to='/menu/promo' className='btn block primary'>
            Shop now
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default MiniCartItems;
