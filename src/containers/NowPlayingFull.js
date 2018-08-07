import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNowPlaying } from '../store/actions/nowPlaying';

class NowPlayingFull extends Component {
    componentDidMount() {
        this.props.fetchNowPlaying();
    }
    render() {
        const { nowPlaying } = this.props;
        return (
            <div className="container movie-grid">
            {
                nowPlaying.movies.slice(0, 8).map((result, index) => {
                    return <Movie result={result} key={index}  />
                })
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        nowPlaying: state.nowPlaying
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNowPlaying }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlayingFull);
