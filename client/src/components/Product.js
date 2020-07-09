import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { uiContext } from '../context/ui/UiState';

const Product = (props) => {
  const { product, cart, getProductDetail, addToCart, toggleAmount } = props;

  const { _id, name, description, price, image } = product;

  const { toggleUi } = useContext(uiContext);

  const handelOpenModal = () => {
    toggleUi('modal');
    getProductDetail({ name, description, price, image });
  };
  const AddToCart = (id) => {
    const inCart = cart.items.find((item) => item._id === id);
    if (inCart) {
      toggleAmount(id, 'inc');
    } else {
      addToCart(product);
    }
  };

  return (
    <div className='product-item'>
      <div className='card'>
        <Link to='#!' onClick={() => handelOpenModal()}>
          <img src={image} alt={name} className='card__image' />
        </Link>
        <div className='card__body'>
          <h3 className='card__title'>{name}</h3>
          <span className='card__subtitle'>Rp {price}</span>
          <button className='btn block primary' onClick={() => AddToCart(_id)}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
