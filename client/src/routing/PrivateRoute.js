import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { component: Component, restricted, isAuth, loading, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
});

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);
