import axios from 'axios';

export function fetchPopular() {
    return function(dispatch) {
        dispatch({
            type: 'FETCH_POPULAR'
        });
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&region=US`)
            .then(res => {
                dispatch({
                    type: 'FETCH_POPULAR_FULFILLED',
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_POPULAR_REJECTED',
                    payload: err
                })
            })
    }
}