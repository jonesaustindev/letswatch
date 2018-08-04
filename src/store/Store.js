import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise());

export default createStore(
    rootReducer,
    compose(middleware, window.devToolsExtension
    ? window.devToolsExtension() : f => f
    )
);