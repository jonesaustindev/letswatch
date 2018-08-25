import { combineReducers } from 'redux';
import nowPlaying from './nowPlaying';
import searchMovie from './searchMovie';
import viewMovie from './viewMovie';
import popular from './popular';
import upcoming from './upcoming';

const appReducer = combineReducers({
    nowPlaying,
    searchMovie,
    viewMovie,
    popular,
    upcoming
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        const { router } = state 
        state = { router }
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;