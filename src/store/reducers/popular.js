export default function reducer(state={
    movies: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_POPULAR': {
            return {
                ...state, 
                fetching: true
            }
        }
        case 'FETCH_POPULAR_REJECTED': {
            return {
                ...state, 
                fetching: false, 
                error: action.payload
            }
        }
        case 'FETCH_POPULAR_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                movies: action.payload
            }
        }
        default:
            return state;
    }
}