import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchNowPlaying } from '../store/actions/nowPlaying';

class NowPlayingFull extends Component {
    componentDidMount() {
        this.props.fetchNowPlaying();
    }

    randomNumber() {
        return Math.floor(Math.random() * 4) + 1;
    }

    render() {
        const { nowPlaying } = this.props;
        return (
            <div>
                <div className="overlay">
                    <div className="overlay-inner">
                        <button className="close">x Close</button>
                        <img />
                    </div>
                </div>

                <div className="banner">
                    <h3>Search, Rate, Review, Watch</h3>
                </div>

                <section className="gallery container">
                    {
                        nowPlaying.movies.slice(0, 5).map((result, index) => {
                            const dbURL = `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                            return (
                                <div key={index} className={`item item${index + 1} h${this.randomNumber()} v${this.randomNumber()}`}>
                                    <img alt={result.title} src={dbURL} />
                                    <div className="item__overlay">
                                        <Link to={`/view/${result.id}`}>
                                            <button>View More</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
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
