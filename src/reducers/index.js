import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nowPlayingMovies from './NowPlayingMovies';

// const rootReducer = combineReducers({nowPlayingData, routing: routerReducer});
const rootReducer = combineReducers({ nowPlayingMovies });
export default rootReducer;