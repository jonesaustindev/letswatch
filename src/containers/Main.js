import React, { Component } from 'react'
import MovieList from './MovieList';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchDisplay: '',
            searchApi: ''
        };
        this.timeout = 0;
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
            } else {
                this.setState({
                    results: []
                });
            }
        }, 300);
    }

    searchMovieApi = async () => {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.searchApi}`);
        let body = await response.json();
        this.setState({
            results: body.results
        });
    }

    render() {
        const { results, searchDisplay } = this.state;

        return (
            <div>
                <h3>Main</h3>
                <input
                    type="text"
                    value={searchDisplay}
                    onChange={e => this.doSearch(e)}
                    placeholder='Movie Title'
                />
                <MovieList
                    results={results}
                />
            </div>
        )
    }
}
