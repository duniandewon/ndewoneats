import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** product actions */
import {
  getProducts,
  setLoading,
  getProductDetail,
} from '../../redux/actions/productActions';

/** cart actions */
import {
  addToCart,
  toggleAmount,
  getSubtotals,
} from '../../redux/actions/cartActions';

/** auth actions */
import { loadUser } from '../../redux/actions/authActions';

/** components */
import Product from '../../components/Product';

const Promo = (props) => {
  const {
    products: { products, loading },
    cart,
    loadUser,
    getProducts,
    setLoading,
    getProductDetail,
    addToCart,
    toggleAmount,
    getSubtotals,
  } = props;

  useEffect(() => {
    setLoading();
    getProducts();
    loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getSubtotals();
    // eslint-disable-next-line
  }, [cart.items]);

  if (loading) {
    return <h1 className='loading'>Loading...</h1>;
  }

  return (
    <div className='product-list'>
      {products &&
        products.map(
          (product) =>
            product.category === 'promo' && (
              <Product
                key={product._id}
                product={product}
                addToCart={addToCart}
                toggleAmount={toggleAmount}
                getProductDetail={getProductDetail}
                cart={cart}
              />
            )
        )}
    </div>
  );
};

Promo.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  getProductDetail: PropTypes.func.isRequired,
  toggleAmount: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  getSubtotals: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, {
  loadUser,
  getProducts,
  setLoading,
  getProductDetail,
  addToCart,
  toggleAmount,
  getSubtotals,
})(Promo);
