import React, { Component } from 'react';
import ActorList from '../containers/ActorList';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credits: []
        };
        this.getMovieCredits = this.getMovieCredits.bind(this);
    }

    componentDidMount() {
        this.getMovieCredits();
    }

    getMovieCredits = async () => {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${this.props.result.id}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
        let body = await response.json();
        this.setState({
            credits: body.cast
        });
    }
    render() {
        const { result } = this.props;

        // console.log(this.state.credits);

        let posterUrl = `https://image.tmdb.org/t/p/original${result.poster_path}`;

        return (
            <div className="card movie-card">
                <div className="poster"><img alt="movie-poster" src={posterUrl} /></div>
                <div className="movie-details">
                    <h3 className="card-title">{result.title}</h3>
                    <h5 className="card-text">User Rating {result.vote_average}</h5>
                    <h6 className="card-text">
                        <Moment className="font-italic" format="YYYY">
                            <p>{result.release_date}</p>
                        </Moment>
                    </h6>
                    <div className="cast">
                        <ActorList credits={this.state.credits} />
                    </div>
                    <Link to='/view/ijawej93288501'>Click</Link>
                </div>
            </div>
        )
    }
}
