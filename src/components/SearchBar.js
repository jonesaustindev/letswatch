import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchMovie, clearSearch } from '../store/actions/searchMovie';
import { Redirect } from 'react-router';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchDisplay: '',
            toSearch: false
        };
        this.timeout = 0;
    }

    doSearch(e) {
        let search = e.target.value;
        let searchString = search.replace(/\s+/g, '+').toLowerCase();
        this.setState({
            searchDisplay: search
        });

        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            if (search.length > 0) {
                this.props.clearSearch();
                this.props.fetchSearchMovie(searchString);
                this.setState({
                    toSearch: true
                })
            } else {
                this.setState({
                    toSearch: false
                })
            }
        }, 800);
    }

    render() {
        const { searchDisplay, toSearch } = this.state;

        let searched;
        if(toSearch === true) {
            searched = <Redirect to='/search' />;
        } else {
            searched = <Redirect to='/' />;
        }
        return (
            <div>
                <input
                    className="container-fluid"
                    type='text'
                    value={searchDisplay}
                    onChange={e => this.doSearch(e)}
                    placeholder='Movie Title'
                />
                {searched}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.results,
        nowPlaying: state.nowPlaying,
        searchDisplay: state.searchDisplay,
        searchApi: state.searchApi
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSearchMovie, clearSearch }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
