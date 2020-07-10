import React from 'react';
import CartAmountToggler from './CartAmountToggler';

const CartItem = ({ item, removeFromCart }) => {
  const { _id, image, name, count, price } = item;
  return (
    <tr className='cart__items'>
      <td className='cart__items--columns' style={{ maxWidth: '2.5rem' }}>
        <img src={image} alt='Beef Burger' />
      </td>
      <td className='cart__items--columns'>{name}</td>
      <td className='cart__items--columns text-align-center'>
        <CartAmountToggler id={_id} count={count} />
      </td>
      <td className='cart__items--columns text-align-center'>
        {count * price}
      </td>
      <td className='cart__items--columns'>
        <button className='material-icons' onClick={() => removeFromCart(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
