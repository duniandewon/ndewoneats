import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProducts } from '../../redux/actions/productActions';
import { loadUser } from '../../redux/actions/authActions';

const Menu = ({ loadUser, getProducts }) => {
  const links = [
    { to: '/menu/promo', text: 'promo' },
    { to: '/menu/pizza', text: 'pizza' },
    { to: '/menu/pasta', text: 'pasta' },
    { to: '/menu/chicken', text: 'chicken' },
    { to: '/menu/rice', text: 'rice' },
    { to: '/menu/snacks', text: 'snacks' },
    { to: '/menu/desserts', text: 'desserts' },
    { to: '/menu/drinks', text: 'drinks' },
  ];

  useEffect(() => {
    getProducts();
    loadUser();
    // eslint-disable-next-line
  }, []);

  return <h1>Menus</h1>;
};

Menu.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
};

export default connect(null, { loadUser, getProducts })(Menu);
