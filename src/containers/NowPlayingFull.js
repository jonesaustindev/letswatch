import React, { Component } from 'react';
import Movie from '../components/Movie';
import { nowPlayingData } from '../actions/actionCreators';

export default class NowPlayingFull extends Component {
    componentDidMount() {
        
    }
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
