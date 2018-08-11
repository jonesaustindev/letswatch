import React from 'react';
import Moment from 'react-moment';

const MoviePage = ({ result }) => {
    let background = `https://image.tmdb.org/t/p/original${result.backdrop_path}`;
    let posterUrl = `https://image.tmdb.org/t/p/original${result.poster_path}`;

    const style = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${background}'`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '600px'
    }

    return (
        <div className="movie-page">
            <div className="movie-page-header" id="bg-overlay" style={style}>
                <div className="movie-content container">
                    <h1>{result.original_title}</h1>
                    <Moment className="font-italic" format="YYYY">
                        <p>{result.release_date}</p>
                    </Moment>
                    <div className="movie-content-grid">
                        <img className="movie-content-poster" src={posterUrl} alt="movie poster" />
                        <div className="movie-content-details">
                            <h2>User Rating {result.vote_average * 10}%</h2>
                            <p id="runtime">{result.runtime} min</p>
                            <p>{result.overview}</p>
                            <p>{result.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;