import React, { Component } from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchNowPlaying } from '../store/actions/nowPlaying';
import { fetchPopular } from '../store/actions/popular';
import { fetchUpcoming } from '../store/actions/upcoming';
// import ReactLoading from 'react-loading';

class NowPlayingFull extends Component {
    componentDidMount() {
        this.props.fetchNowPlaying();
        this.props.fetchPopular();
        this.props.fetchUpcoming();
    }

    randomNumber() {
        return Math.floor(Math.random() * 4) + 1;
    }

    render() {
        const { nowPlaying, popular } = this.props;
        return (
            <div>
                <div className="banner text-center">
                    <h3>Find what's next to watch</h3>
                </div>
                <div className="home-page grid-container">
                    <div className="overlay">
                        <div className="overlay-inner">
                            <button className="close">x Close</button>
                            <img />
                        </div>
                    </div>

                    <div className="homepage-title">
                        <h5>In Theaters</h5>
                    </div>

                    <div className="side-content-title container">
                        <h5>Popular</h5>
                    </div>

                    <section className="gallery">
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

                    <section className="side-content container">
                        <div>
                            {
                                popular.movies.slice(0, 8).map((result, index) => {
                                    return (
                                        <div key={index}>
                                            <Link to={`/view/${result.id}`}>
                                                <p className="popular-titles">{result.title}</p>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
                <section className="signup-content">
                    <div className="container text-center">
                        <h3>BECOME PART OF THE LET'S WATCH COMMUNITY</h3>
                        <p>Signing up will allow you to rate movies, favorite, and create you own "To Watch" list. The ability to create an account will be coming soon!</p>
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        nowPlaying: state.nowPlaying,
        popular: state.popular,
        upcoming: state.upcoming
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchNowPlaying, fetchPopular, fetchUpcoming }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlayingFull);
