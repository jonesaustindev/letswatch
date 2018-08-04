import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movie from '../components/Movie';
import { fetchNowPlaying } from '../store/actions/nowPlaying';

class NowPlayingFull extends Component {
    componentDidMount() {
        this.props.fetchNowPlaying();
    }
    render() {
        const { nowPlaying } = this.props;
        console.log(nowPlaying.movies);
        return (
            <div className="container movie-grid">
            {
                nowPlaying.movies.map((result, index) => {
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
