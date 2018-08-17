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
                <Route exact path='/' render={(props) => (
                    <div>
                        <NowPlayingFull {...props} />
                    </div>
                )}
                />
                <Route exact path='/search' render={(props) => (
                    <div>
                        <MovieList {...props} />
                    </div>
                )}
                />
                <Route exact path='/view/:movieId' render={(props) => (
                    <SingleMovie {...props} />
                )}
                />
                <Route exact path='/comingsoon' render={() => (
                    <div className="container text-center">
                        <h4>Currently working on adding user profiles so you can favorite, vote, and review all movies! Please check back soon.</h4>
                    </div>
                )} />
            </Switch>
        </div>
    )
}

export default withRouter(
    (Main)
);