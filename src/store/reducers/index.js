import { combineReducers } from 'redux';
import nowPlaying from './nowPlaying';
import searchMovie from './searchMovie';
import viewMovie from './viewMovie';

const rootReducer = combineReducers({
    nowPlaying,
    searchMovie,
    viewMovie
});

export default rootReducer;