import React from 'react';
import Moment from 'react-moment';
import ActorCard from './ActorCard';
import YouTube from 'react-youtube';
import VideoPlayer from './VideoPlayer';
import { Link } from 'react-router-dom';

const MoviePage = ({ result }) => {
    const background = `https://image.tmdb.org/t/p/original${result.backdrop_path}`;
    const posterUrl = `https://image.tmdb.org/t/p/original${result.poster_path}`;

    const opts = {
        height: '390',
        width: '640'
    };

    const style = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${background}'`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '750px'
    }

    return (
        <div>
            <section className="movie-page">
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
                                <div className="movie-interactions">
                                    <a className="far fa-play-circle" data-toggle="modal" data-target="#trailerModal"></a>
                                    <div className="modal fade" id="trailerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <div className="embed-responsive embed-responsive-16by9">
                                                        {
                                                            result.videos && result.videos.results.slice(0, 1).map((results, index) => {
                                                                const url = `https://www.youtube.com/watch?v=${results.key}`;
                                                                return (
                                                                    <YouTube
                                                                        className="embed-responsive-item"
                                                                        videoId={results.key}
                                                                        opts={opts}
                                                                        key={index}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to='/comingsoon'>
                                        <i className="far fa-star"></i>
                                    </Link>
                                    <Link to='/comingsoon'>
                                        <i className="far fa-heart"></i>
                                    </Link>
                                    <Link to='/comingsoon'>
                                        <i className="far fa-bookmark"></i>
                                    </Link>
                                </div>
                                <div className="movie-overview-container">
                                    <h3>Overview</h3>
                                    <p className="movie-overview">{result.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="top-billed-cast container">
                <h3>Top Billed Cast</h3>
                <div className="cast">
                    {
                        result.credits && result.credits.cast.slice(0, 5).map((results, index) => {
                            return <ActorCard results={results} key={index} />
                        })
                    }
                </div>
            </section>
            <section className="trailer text-center">
                {
                    result.videos && result.videos.results.slice(0, 1).map((results, index) => {
                        return <VideoPlayer
                            videoId={results.key}
                            key={index}
                        />
                    })
                }
            </section>
        </div>
    )
}

export default MoviePage;