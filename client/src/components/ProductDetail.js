import React, { Fragment } from 'react';
import { connect } from 'react-redux';

/** product actions */
import { getProductDetail } from '../redux/actions/productActions';

/** cart actions */
import { addToCart, toggleAmount } from '../redux/actions/cartActions';

import Modal from '../layout/Modal';

const ProductDetail = ({
  items,
  product,
  getProductDetail,
  addToCart,
  toggleAmount,
}) => {
  const AddToCart = (id) => {
    const inCart = items.find((item) => item._id === id);
    if (inCart) {
      toggleAmount(id, 'inc');
    } else {
      addToCart(product);
    }
  };

  return (
    <Fragment>
      {product && (
        <Modal getProductDetail={getProductDetail}>
          <div className='product-detail'>
            <img
              src={product.image}
              alt={product.name}
              className='product__img'
            />
            <div className='product__info'>
              <h3>{product.name.toUpperCase()}</h3>
              <p>{product.description}</p>
            </div>
            <div className='product__action'>
              <p>Rp {product.price}</p>
              <button
                className='btn primary'
                onClick={() => AddToCart(product._id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.products.product,
  items: state.cart.items,
});

export default connect(mapStateToProps, {
  getProductDetail,
  addToCart,
  toggleAmount,
})(ProductDetail);
