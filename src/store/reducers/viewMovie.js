export default function reducer(state = {
    singleMovie: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_MOVIE': {
            return {
                ...state,
                fetching: true
            }
        }
        case 'FETCH_MOVIE_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case 'FETCH_MOVIE_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                singleMovie: action.payload
            }
        }
        case 'CLEAR_MOVIE': {
            return {
                singleMovie: [],
                fetching: false,
                fetched: false,
                error: null
            }
        }
        default:
            return state;
    }
}