import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

/** Layout */
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';

/** Pages */
import Home from './pages/main/Home';
import Login from './pages/main/Login';

/** Styles */
import './assets/scss/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
