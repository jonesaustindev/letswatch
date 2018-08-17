import axios from 'axios';

export function fetchSearchMovie(searchString) {
    return function(dispatch) {
        dispatch({
            type: 'FETCH_SEARCH'
        });
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchString}`)
            .then(res => {
                dispatch({
                    type: 'FETCH_SEARCH_FULFILLED',
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_SEARCH_REJECTED',
                    payload: err
                })
            })
    }
}

export function clearSearch() {
    return function(dispatch) {
        dispatch({
            type: 'CLEAR_SEARCH'
        })
    }
}