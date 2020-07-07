import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

/** Layout */
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';

/** Pages */

/** Styles */
import './assets/scss/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Main>
          <h1>Hello</h1>
        </Main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
