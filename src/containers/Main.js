import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import MovieList from './MovieList';
import NowPlayingFull from './NowPlayingFull';
import MoviePage from '../components/MoviePage';
import SearchBar from '../components/SearchBar';

const Main = props => {
    const { searchMovies } = this.props;
    return (
        <div>
            <Switch>
                <Route exact path='/' render={(props) => (
                    <div>
                    {
                        searchMovies ? <MovieList /> : <NowPlayingFull />
                    }
                    </div>
                )}
                />
                <Route exact path='/search' render={(props) => (
                    <div>
                        
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

function mapStateToProps(state) {
    return {
        searchMovies: state.searchMovies
    }
}

export default withRouter(
    connect(mapStateToProps, { searchMovies })(Main)
);
