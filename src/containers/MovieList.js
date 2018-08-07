import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchMovie } from '../store/actions/searchMovie';

class MovieList extends Component {
    render() {
        const { searchMovie } = this.props;
        return (
            <div className="container movie-grid">
                {
                    searchMovie.movies.map((result, index) => {
                        return <Movie result={result} key={index}  />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchMovie: state.searchMovie
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSearchMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);