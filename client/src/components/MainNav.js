import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { uiContext } from '../context/ui/UiState';

import ShoppingCart from '../components/ShoppingCart';

import Logo from '../assets/images/logo.svg';

const MainNav = ({ auth: { isAuth, user } }) => {
  const { toggleUi } = useContext(uiContext);

  return (
    <nav className='main-nav container'>
      <button
        className='drawer-toggler hide-on-desktop'
        onClick={() => toggleUi('drawer')}
      >
        <i className='material-icons'>menu</i>
      </button>
      <ul className='nav hide-on-mobile'>
        <li className='nav__item'>
          <Link to='/' className='nav__link'>
            home
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/menu/promo' className='nav__link'>
            menu
          </Link>
        </li>
      </ul>
      <Link to='/' className='logo'>
        <img src={Logo} alt='logo' />
      </Link>
      <ul className='nav'>
        <li className='nav__item'>
          {isAuth && user ? (
            <Link to='/account/orders' className='nav__link hide-on-mobile'>
              my acount
            </Link>
          ) : (
            <Link to='/login' className='nav__link hide-on-mobile'>
              login
            </Link>
          )}
        </li>
        <li className='nav__item'>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

MainNav.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainNav);
