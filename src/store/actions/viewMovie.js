import axios from 'axios';

export function fetchViewMovie(movieId) {
    return function(dispatch) {
        dispatch({
            type: 'FETCH_MOVIE'
        });
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits,videos,images,reviews`)
            .then(res => {
                dispatch({
                    type: 'FETCH_MOVIE_FULFILLED',
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_MOVIE_REJECTED',
                    payload: err
                })
            })
    }
}