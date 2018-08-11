import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViewMovie } from '../store/actions/viewMovie';
import MoviePage from '../components/MoviePage';

class SingleMovie extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        let movieId = parseInt(this.props.match.params.movieId);
        this.props.fetchViewMovie(movieId);
    }

    render() {
        const singleMovie = this.props.viewMovie.singleMovie;
        return (
            <div>
                <MoviePage result={singleMovie} />
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
    return bindActionCreators({ fetchViewMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);