import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <Navbar currentUser={this.props.currentUser} />
        <SearchBar />
      </header>
    )
  }
}
