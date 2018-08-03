import React from 'react';
import Main from './containers/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';
import store from './store/Store';


const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App grid-container'>
        <h1>Let's Watch</h1>
        <SearchBar />
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    </Router>
  </Provider>
)

export default App;
