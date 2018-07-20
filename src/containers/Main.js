import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import NowPlayingFull from './NowPlayingFull';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            nowPlaying: [],
            searchDisplay: '',
            searchApi: ''
        };
        this.timeout = 0;
    }

    componentDidMount() {
        this.nowPlayingMovieApi();
    }

    doSearch(e) {
        let search = e.target.value;
        let searchString = search.replace(/\s+/g, '+').toLowerCase();
        this.setState({
            searchDisplay: search,
            searchApi: searchString
        });

        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            if (search) {
                this.searchMovieApi();
                this.setState({
                    nowPlaying: []
                });
            } else {
                this.setState({
                    results: []
                });
                this.nowPlayingMovieApi();
            }
        }, 500);
    }

    searchMovieApi = async () => {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.searchApi}`);
        let body = await response.json();
        this.setState({
            results: body.results
        });
    }

    nowPlayingMovieApi = async () => {
        let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
        let body = await response.json();
        this.setState({
            nowPlaying: body.results
        });
    }

    render() {
        const { results, searchDisplay, nowPlaying } = this.state;

        return (
            <div>
                <h3>Main</h3>
                <input
                    type="text"
                    value={searchDisplay}
                    onChange={e => this.doSearch(e)}
                    placeholder='Movie Title'
                />
                <Switch>
                    <Route exact path='/' render={() => (
                        <div className="container">
                            {
                                searchDisplay ? <MovieList results={results} /> : <NowPlayingFull results={nowPlaying} />
                            }
                        </div>
                    )}
                    />
                    <Route path='/movie' render={() => (
                        <div className="container">
                            <h1>Movie Page</h1>
                        </div>
                    )}
                    />
                </Switch>
            </div>
        )
    }
}
