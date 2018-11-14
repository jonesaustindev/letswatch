import { combineReducers } from 'redux';
import nowPlaying from './nowPlaying';
import searchMovie from './searchMovie';
import viewMovie from './viewMovie';
import popular from './popular';
import upcoming from './upcoming';
import currentUser from './currentUser';
import errors from './errors';

const rootReducer = combineReducers({
    nowPlaying,
    searchMovie,
    viewMovie,
    popular,
    upcoming,
    currentUser,
    errors
});

// const rootReducer = (state, action) => {
//     if (action.type === 'RESET') {
//         const { router } = state 
//         state = { router }
//         state = undefined;
//     }
//     return appReducer(state, action);
// }

export default rootReducer;