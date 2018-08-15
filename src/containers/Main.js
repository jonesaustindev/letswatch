import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import MovieList from './MovieList';
import NowPlayingFull from './NowPlayingFull';
import SingleMovie from './SingleMovie';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';


const Main = () => {
    return (
        <div>
            <Navbar />
            <SearchBar />
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
                <Route exact path='/view/:movieId' render={(props) => (
                    <SingleMovie {...props} />
                )}
                />
            </Switch>
        </div>
    )
}

export default withRouter(
    (Main)
);