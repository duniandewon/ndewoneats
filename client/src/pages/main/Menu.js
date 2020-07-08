import React, { useEffect, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import SideNav from '../../layout/SideNav';
import SearchBox from '../../components/SearchBox';

import Promo from '../products/Promo';
import Pizza from '../products/Pizza';
import Pasta from '../products/Pasta';
import ProductDetail from '../../components/ProductDetail';

const Menu = () => {
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

  return (
    <Fragment>
      <ProductDetail />
      <div className='wrapper'>
        <SideNav links={links}>
          <SearchBox />
        </SideNav>
        <Switch>
          <Route path='/menu/promo' component={Promo} />
          <Route path='/menu/pizza' component={Pizza} />
          <Route path='/menu/pasta' component={Pasta} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default Menu;
