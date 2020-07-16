import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uiContext } from '../context/ui/UiState';
import { Link } from 'react-router-dom';

const Drawer = ({ isAuth }) => {
  const { drawer, toggleUi } = useContext(uiContext);

  return (
    <aside className={`drawer container ${drawer ? 'active' : ''}`}>
      <div className='drawer__item'>
        <Link
          to='/'
          className='drawer__link'
          onClick={() => toggleUi('drawer')}
        >
          Home
        </Link>
      </div>
      <div className='drawer__item'>
        <Link
          to='/menu/promo'
          className='drawer__link'
          onClick={() => toggleUi('drawer')}
        >
          Menu
        </Link>
      </div>
      <div className='devider'></div>
      {isAuth ? (
        <Fragment>
          <div className='drawer__item'>
            <Link
              to='/account/orders'
              className='drawer__link'
              onClick={() => toggleUi('drawer')}
            >
              my account
            </Link>
          </div>
          <div className='drawer__item'>
            <Link
              to='/'
              className='drawer__link'
              onClick={() => {
                toggleUi('drawer');
              }}
            >
              logout
            </Link>
          </div>
        </Fragment>
      ) : (
        <div className='drawer__item'>
          <Link
            to='/login'
            className='drawer__link'
            onClick={() => toggleUi('drawer')}
          >
            Login
          </Link>
        </div>
      )}
    </aside>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(Drawer);
