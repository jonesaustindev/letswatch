import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Movie = ({ result }) => {
    let posterUrl = `https://image.tmdb.org/t/p/original${result.poster_path}`;

    let overview = result.overview.substring(0, 180) + '...';
    return (
        <div className="card movie-card">
            <div className="poster"><img alt="movie-poster" src={posterUrl} /></div>
            <div className="movie-details">
                <h3 className="card-title">{result.title}</h3>
                <h5 className="card-text">User Rating {result.vote_average * 10}%</h5>
                <h6 className="card-text">
                    <Moment className="font-italic" format="YYYY">
                        <p>{result.release_date}</p>
                    </Moment>
                </h6>
                <div className="movie-card-overview">
                    <p>{overview}</p>
                    <Link className="view-more" to={`/view/${result.id}`}>View More</Link>
                </div>
            </div>
        </div>
    )
}

export default Movie;