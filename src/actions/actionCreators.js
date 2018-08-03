import { apiCall } from '../data/api';
import { LOAD_NOW_PLAYING_DATA } from './actionTypes';

export const loadNowPlayingData = (res) => ({
    type: LOAD_NOW_PLAYING_DATA,
    res
});

export const nowPlayingData = () => {
    const options = {
        method: 'GET'
    }
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`, options)
            .then(res => res.json())
            .then(data => dispatch(loadNowPlayingData(data)))
            .catch(err => console.log(err))
    }
    // return nowPlayingMovieApi = async () => {
    //     let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
    //     let body = await response.json();
    //     // this.setState({
    //     //     nowPlaying: body.results
    //     // });
    //     dispatch(loadNowPlayingData(body));
    // }
}
