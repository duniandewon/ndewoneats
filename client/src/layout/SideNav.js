import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = ({ links, children }) => {
  return (
    <aside className='sidenav hide-on-mobile'>
      <div className='sidenav__header'>{children}</div>
      <Fragment>
        {links.map((link) => (
          <div key={link.text} className='sidenav__item'>
            <NavLink to={link.to} className='sidenav__link'>
              {link.text}
            </NavLink>
          </div>
        ))}
      </Fragment>
    </aside>
  );
};

export default SideNav;
