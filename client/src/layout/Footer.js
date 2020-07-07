import React from 'react';

import Facebook from '../assets/images/facebook.svg';
import Twitter from '../assets/images/twitter.svg';
import Instagram from '../assets/images/instagram.svg';

const Footer = () => {
  return (
    <footer className='footer container'>
      <h1>Ndewon Eats</h1>
      <div className='contacts'>
        <a href='tel:12345 67' className='phone'>
          <i className='material-icons'>phone</i>
          <span>12345 67</span>
        </a>
        <div className='socials'>
          <a href='https://www.facebook.com' className='facebook'>
            <img src={Facebook} alt='facebook' />
          </a>
          <a href='https://www.instagram.com' className='instagram'>
            <img src={Instagram} alt='instagram' />
          </a>
          <a href='https://www.twitter.com' className='twitter'>
            <img src={Twitter} alt='twitter' />
          </a>
        </div>
      </div>
      <div className='tos'>
        <a href='/privacy'>Privacy Policy</a>
        <a href='/terms-conditions'>Terms and Conditions</a>
        <p className='disclaimer'>
          This website was built for educational purpose only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
