import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../redux/actions/authActions';
import { Link } from 'react-router-dom';

const Home = ({ loadUser }) => {
  const links = [
    'promo',
    'pizza',
    'pasta',
    'chicken',
    'rice',
    'snacks',
    'desserts',
    'drinks',
  ];

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1 className='section-title'>Our menu</h1>
      <div className='menus'>
        {links.map((link) => (
          <Link to={`/menu/${link}`} className='menu'>
            <div className='card'>
              <img
                src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt={link}
                className='card__image'
              />
              <div className='card__body'>
                <h3 className='card__title'>{link}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(Home);
