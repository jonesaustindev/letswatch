import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        const { result } = this.props;

        let posterUrl = `https://image.tmdb.org/t/p/original${result.poster_path}`;
        let movieCredits = `https://api.themoviedb.org/3/movie/${result.id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;

        return (
            <div className="card movie-card">
                <div className="poster"><img alt="movie-poster" src={posterUrl} /></div>
                <div className="movie-details">
                    <h3 className="card-title">{result.title}</h3>
                    <h5 className="card-text">{result.vote_average}</h5>
                    <h6 className="card-text">{result.release_date}</h6>
                    <div className="cast">
                        
                    </div>
                </div>
            </div>
        )
    }
}
