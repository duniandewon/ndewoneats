import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.svg';

const MainNav = () => {
  return (
    <nav className='main-nav container'>
      <button className='drawer-toggler hide-on-desktop'>
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
          {/* {isAuthenticated && user ? ( */}
          <Link to='/my-account/orders' className='nav__link hide-on-mobile'>
            my acount
          </Link>
          {/* ) : ( */}
          <Link to='/login' className='nav__link hide-on-mobile'>
            login
          </Link>
          {/* )} */}
        </li>
        {/* <li className='nav__item'>
          <ShoppingCart />
        </li> */}
      </ul>
    </nav>
  );
};

export default MainNav;
