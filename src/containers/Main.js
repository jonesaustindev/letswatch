import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import NowPlayingFull from './NowPlayingFull';
import SingleMovie from './SingleMovie';
import Header from './Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path='/' render={(props) => (
                    <div className="main-wrapper">
                        <NowPlayingFull 
                            {...props} 
                        />
                    </div>
                )}
                />
                <Route exact path='/search' render={(props) => (
                    <div className="main-wrapper">
                        <MovieList 
                            {...props}
                        />
                    </div>
                )}
                />
                <Route exact path='/view/:movieId' render={(props) => (
                    <div className="main-wrapper">
                        <SingleMovie {...props} />
                    </div>
                )}
                />
                <Route exact path='/comingsoon' render={() => (
                    <div className="container text-center">
                        <h4>Currently working on adding user profiles so you can favorite, vote, and review all movies! Please check back soon.</h4>
                    </div>
                )} />
                <Route
                    exact path='/login'
                    render={(props) => {
                        return (
                            <AuthForm
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser}
                                buttonText='Log in'
                                heading='Welcome Back!'
                                {...props}
                            />
                        )
                    }}
                />
                <Route
                    exact
                    path='/signup'
                    render={props => {
                        return (
                            <AuthForm
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser}
                                signUp
                                buttonText="Sign me up"
                                heading="Join the Let's Watch Community Today!"
                                {...props}
                            />
                        );
                    }}
                />

            </Switch>
            <Footer />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(
    connect(mapStateToProps, { authUser, removeError })(Main)
);