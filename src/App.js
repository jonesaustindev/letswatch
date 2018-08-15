import React from 'react';
import Main from './containers/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App grid-container'>
        <Main />
      </div>
    </Router>
  </Provider>
)

export default App;
