import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Orders from '../user/Orders';

import SideNav from '../../layout/SideNav';

const Account = (props) => {
  const { loading, user } = props;

  const links = [
    { to: '/account/orders', text: 'orders' },
    { to: '/account/profile', text: 'profile' },
    { to: '/logout', text: 'logout' },
  ];

  return (
    <div className='wrapper'>
      {user && !loading && (
        <SideNav links={links}>
          <h1>{user.name}</h1>
        </SideNav>
      )}
      <Switch>
        <Route path='/account/orders' component={Orders} />
      </Switch>
    </div>
  );
};

Account.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(Account);
