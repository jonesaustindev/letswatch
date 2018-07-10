import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        const { result } = this.props;
        return (
            <div>
                <h4>{result.title}</h4>
                <h5>{result.vote_average}</h5>
                <h6>{result.vote_count}</h6>
                <p>{result.overview}</p>
            </div>
        )
    }
}
