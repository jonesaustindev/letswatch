import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../containers/Main';

class SearchBar extends Component {
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
        const { searchDisplay } = this.state;
        return (
            <div>
                <input
                    type='text'
                    value={searchDisplay}
                    onChange={e => this.doSearch(e)}
                    placeholder='Movie Title'
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.results,
        nowPlaying: state.nowPlaying,
        searchDisplay: state.searchDisplay,
        searchApi: state.searchApi
    };
}

export default connect(mapStateToProps)(SearchBar);
