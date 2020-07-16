import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

/** UI Context */
import { UIState } from './context/ui/UiState';

/** Layout */
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';

/** Pages */
import Home from './pages/main/Home';
import Menu from './pages/main/Menu';
import Cart from './pages/main/Cart';
import Login from './pages/main/Login';
import Account from './pages/main/Account';

/** Components */
import Drawer from './components/Drawer';

/** Styles */
import './assets/scss/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <UIState>
          <Header />
          <Drawer />
          <Main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/menu' component={Menu} />
              <Route path='/cart' component={Cart} />
              <Route path='/account' component={Account} />
              <Route path='/login' component={Login} />
            </Switch>
          </Main>
          <Footer />
        </UIState>
      </Router>
    </Provider>
  );
};

export default App;
