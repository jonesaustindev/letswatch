import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../store/actions/auth';

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const currentUser = this.props.currentUser.user.username;
        return (
            <div>
                <nav className="navbar navbar-expand-md">
                    <a id="letswatch" className="navbar-brand" href="/"><i className="fa fa-chevron-circle-right"></i> Let's Watch</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='/'>
                                    <a className="nav-link" href="/">Home</a>
                                </Link>
                            </li>
                            {this.props.currentUser.isAuthenticated ? (
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to ='/'>
                                            <a className="nav-link">Hello, {currentUser}</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/'>
                                            <a className="nav-link" onClick={this.logout}>Log out</a>
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                    <div className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to='/login'>
                                                <a className="nav-link">Login</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/signup'>
                                                <a className="nav-link">Signup</a>
                                            </Link>
                                        </li>
                                    </div>
                                )}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { logout })(Navbar);