import React from 'react';
import Main from './containers/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

const App = () => (
  // <Provider store={store}>
    <BrowserRouter>
      <div className='App grid-container'>
        <h1>Let's Watch</h1>
        <Main />
      </div>
    </BrowserRouter>
  // </Provider>
);

export default App;
