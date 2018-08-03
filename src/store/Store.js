import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default createStore(
    compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension() : f => f
    )
);