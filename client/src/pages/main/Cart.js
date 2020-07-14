import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts, setLoading } from '../../redux/actions/productActions';
import { getSubtotals } from '../../redux/actions/cartActions';
import { loadUser } from '../../redux/actions/authActions';

import CheckoutSteps from '../../layout/CheckoutSteps';
import CartPreview from '../../components/CartPreview';
import DeliveryInfo from '../../components/DeliveryInfo';
import PaymentInfo from '../../components/PaymentInfo';

import ThanksForShopping from '../../components/ThanksForShopping';

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
    <Fragment>
      <ThanksForShopping />
      <CheckoutSteps steps={steps}>
        <CartPreview />
        <DeliveryInfo />
        <PaymentInfo />
      </CheckoutSteps>
    </Fragment>
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
