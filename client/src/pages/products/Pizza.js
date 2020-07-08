import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getProducts,
  setLoading,
  getProductDetail,
} from '../../redux/actions/productActions';
import { loadUser } from '../../redux/actions/authActions';
import Product from '../../components/Product';

const Pizza = ({
  products: { products, loadin },
  loadUser,
  getProducts,
  setLoading,
  getProductDetail,
}) => {
  useEffect(() => {
    setLoading();
    getProducts();
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (loadin) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='product-list'>
      {products &&
        products.map(
          (product) =>
            product.category === 'pizza' && (
              <Product
                key={product._id}
                product={product}
                // addToCart={addToCart}
                // toggleCount={toggleCount}
                getProductDetail={getProductDetail}
                // toggleUi={toggleUi}
              />
            )
        )}
    </div>
  );
};

Pizza.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  getProductDetail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, {
  loadUser,
  getProducts,
  setLoading,
  getProductDetail,
})(Pizza);
