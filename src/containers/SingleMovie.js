import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViewMovie } from '../store/actions/viewMovie';
import { clearMovie } from '../store/actions/viewMovie';
import MoviePage from '../components/MoviePage';
import Loading from '../components/Loading';

class SingleMovie extends Component {

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        this.props.fetchViewMovie(movieId);
    }

    componentWillUnmount() {
        this.props.clearMovie();
    }

    render() {
        const singleMovie = this.props.viewMovie.singleMovie;
        console.log(this.props);
        return (
            <div>
                {
                    this.props.viewMovie.fetched === true ? <MoviePage result={singleMovie} /> : <Loading />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        viewMovie: state.viewMovie
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchViewMovie, clearMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);