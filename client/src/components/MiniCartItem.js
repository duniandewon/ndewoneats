import React from 'react';

const MiniCartItem = ({ item, withImage }) => {
  const { count, name, price, image } = item;
  return (
    <div className='mini-cart-item'>
      <div className='mini-cart-item__info'>
        {withImage && (
          <div className='mini-cart-item__info--img'>
            <img src={image} />
          </div>
        )}
        <p className='mini-cart-item__info--name'>{name}</p>
      </div>
      <p className='mini-cart-item__amount'>x {count}</p>
      <div className='mini-cart-item__total'>Rp. {price}</div>
    </div>
  );
};

export default MiniCartItem;
