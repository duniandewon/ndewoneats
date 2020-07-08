import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts, setLoading } from '../../redux/actions/productActions';
import { loadUser } from '../../redux/actions/authActions';
import Product from '../../components/Product';

const Promo = ({
  products: { products, loadin },
  loadUser,
  getProducts,
  setLoading,
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
            product.category === 'promo' && (
              <Product
                key={product._id}
                product={product}
                // addToCart={addToCart}
                // toggleCount={toggleCount}
                getProducts={getProducts}
                // toggleUi={toggleUi}
              />
            )
        )}
    </div>
  );
};

Promo.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { loadUser, getProducts, setLoading })(
  Promo
);
