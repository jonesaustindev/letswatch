import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieList from './MovieList';
import NowPlayingFull from './NowPlayingFull';
import MoviePage from '../components/MoviePage';
import SearchBar from '../components/SearchBar';
import { fetchSearchMovie } from '../store/actions/searchMovie';
import { fetchNowPlaying } from '../store/actions/nowPlaying';


const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => (
                    <div>
                        <NowPlayingFull />
                    </div>
                )}
                />
                <Route exact path='/search' render={() => (
                    <div>
                        <MovieList />
                    </div>
                )}
                />
                <Route exact path='/view/:movieId' render={() => (
                    <div>
                        <h3>Movie Page</h3>
                    </div>
                )}
                />
            </Switch>
        </div>
    )
}

export default withRouter(
    (Main)
);