export default function reducer(state={
    movies: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_UPCOMING': {
            return {
                ...state, 
                fetching: true
            }
        }
        case 'FETCH_UPCOMING_REJECTED': {
            return {
                ...state, 
                fetching: false, 
                error: action.payload
            }
        }
        case 'FETCH_UPCOMING_FULFILLED': {
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