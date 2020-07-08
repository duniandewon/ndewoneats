import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from '../layout/Modal';

import { getProductDetail } from '../redux/actions/productActions';

const ProductDetail = ({ product, getProductDetail }) => {
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
                /* onClick={() =>
                  product.inCart
                    ? toggleCount(product.id, 'inc')
                    : addToCart(product)
                } */
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
});

export default connect(mapStateToProps, { getProductDetail })(ProductDetail);
