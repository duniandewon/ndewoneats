import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

/** UI Context */
import { UIState } from './context/ui/UiState';

/** Private Route */
import PrivateRoute from './routing/PrivateRoute';

/** Layout */
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';

/** Pages */
import Home from './pages/main/Home';
import Menu from './pages/main/Menu';
import Cart from './pages/main/Cart';
import Login from './pages/main/Login';
import Register from './pages/main/Register';
import Account from './pages/main/Account';
import Logout from './pages/main/Logout';

/** Components */
import Drawer from './components/Drawer';

/** Styles */
import './styles.css';

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
              <Route path='/register' component={Register} />
              <PrivateRoute path='/logout' component={Logout} />
            </Switch>
          </Main>
          <Footer />
        </UIState>
      </Router>
    </Provider>
  );
};

export default App;
