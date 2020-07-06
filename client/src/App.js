import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <h1>Hello</h1>
      </Router>
    </Provider>
  );
};

export default App;
