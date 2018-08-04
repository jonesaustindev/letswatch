import { combineReducers } from 'redux';
import nowPlaying from './nowPlaying';
import searchMovie from './searchMovie';

const rootReducer = combineReducers({
    nowPlaying,
    searchMovie
});

export default rootReducer;