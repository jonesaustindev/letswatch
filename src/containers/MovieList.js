import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNowPlaying } from '../store/actions/nowPlaying';

class MovieList extends Component {
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

function mapStateToProps(state) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);