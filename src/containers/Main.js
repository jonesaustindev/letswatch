import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import MovieList from './MovieList';
import NowPlayingFull from './NowPlayingFull';
import MoviePage from '../components/MoviePage';
import SearchBar from '../components/SearchBar';

const Main = props => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={(props) => (
                    <div>
                        <h3>Main</h3>
                    </div>
                )}
                />
                <Route path='/view/:movieId' render={(props) => (
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
