import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts, setLoading } from '../../redux/actions/productActions';
import { getSubtotals } from '../../redux/actions/cartActions';
import { loadUser } from '../../redux/actions/authActions';

import CheckoutSteps from '../../layout/CheckoutSteps';
import CartPreview from '../../components/CartPreview';

const Cart = ({
  items,
  loading,
  getProducts,
  getSubtotals,
  setLoading,
  loadUser,
}) => {
  const steps = ['cart', 'delivery', 'payment'];

  useEffect(() => {
    setLoading();
    getProducts();
    loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getSubtotals();
    // eslint-disable-next-line
  }, [items]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <CheckoutSteps steps={steps}>
      <CartPreview />
    </CheckoutSteps>
  );
};

Cart.propTypes = {
  getSubtotals: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  items: state.cart.items,
});

export default connect(mapStateToProps, {
  getProducts,
  getSubtotals,
  setLoading,
  loadUser,
})(Cart);
