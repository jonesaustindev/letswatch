import { LOAD_NOW_PLAYING_DATA } from '../actions/actionTypes';

const nowPlayingMovie = (state = [], action) => {
    switch(action.type) {
        case LOAD_NOW_PLAYING_DATA:
            return [...action.movies]
        default:
            return state;
    }
};

export default nowPlayingMovie;