import axios from 'axios';

export function fetchNowPlaying() {
    return function(dispatch) {
        dispatch({
            type: 'FETCH_NOWPLAYING'
        });
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                dispatch({
                    type: 'FETCH_NOWPLAYING_FULFILLED',
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_NOWPLAYING_REJECTED',
                    payload: err
                })
            })
    }
}