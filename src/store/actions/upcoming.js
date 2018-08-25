import axios from 'axios';

export function fetchUpcoming() {
    return function(dispatch) {
        dispatch({
            type: 'FETCH_UPCOMING'
        });
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                dispatch({
                    type: 'FETCH_UPCOMING_FULFILLED',
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_UPCOMING_REJECTED',
                    payload: err
                })
            })
    }
}