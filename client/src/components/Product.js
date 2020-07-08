import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { uiContext } from '../context/ui/UiState';

const Product = (props) => {
  const {
    product: { name, description, price, image },
    getProductDetail,
  } = props;

  const { toggleUi } = useContext(uiContext);

  const handelOpenModal = () => {
    toggleUi('modal');
    getProductDetail({ name, description, price, image });
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
          <button
            className='btn block primary'
            // onClick={() =>
            //   product.inCart ? toggleCount(id, 'inc') : addToCart(product)
            // }
          >
            order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
