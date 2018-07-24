import React, { Component } from 'react';
import Movie from '../components/Movie';

export default class MovieList extends Component {
    render() {
        return (
            <div className="container movie-grid">
                {
                    this.props.results.map((result, index) => {
                        return <Movie result={result} key={index}  />
                    })
                }
            </div>
        )
    }
}
