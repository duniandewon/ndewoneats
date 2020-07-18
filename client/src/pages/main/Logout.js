import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/** Auth actions */
import { loadUser, setLoading, logout } from '../../redux/actions/authActions';

/** Cart actions */
import { clearCart } from '../../redux/actions/cartActions';

const Logout = (props) => {
  const { loadUser, setLoading, loading, logout, clearCart } = props;

  useEffect(() => {
    setLoading();
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className='logout'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='card logout'>
      <h1>Logout Now?</h1>
      <p>Are you sure you want to logout? Your cart will be emtyed.</p>
      <button
        className='btn primary'
        onClick={() => {
          logout();
          clearCart();
        }}
      >
        Logout
      </button>
      <Link to='/account/orders'>Stay logged in</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  loadUser,
  setLoading,
  logout,
  clearCart,
})(Logout);
