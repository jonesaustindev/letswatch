export default function reducer(state = {
    movies: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_SEARCH': {
            return {
                ...state,
                fetching: true
            }
        }
        case 'FETCH_SEARCH_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case 'FETCH_SEARCH_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                movies: action.payload
            }
        }
        case 'CLEAR_SEARCH': {
            return {
                movies: [],
                fetching: false,
                fetched: false,
                error: null
            }
        }
        default:
            return state;
    }
}