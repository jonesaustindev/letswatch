import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
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
                            <li className="nav-item">
                                <Link to='/login'>
                                    <a className="nav-link" href="#">Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signup'>
                                    <a className="nav-link" href="#">Signup</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
