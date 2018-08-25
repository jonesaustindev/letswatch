import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.videoId,
            player: null
        }
        this.onReady = this.onReady.bind(this);
    }

    onReady(e) {
        this.setState({
            player: e.target
        })
    }

    render() {
        return (
            <div>
                <YouTube id="movie-trailer" videoId={this.state.videoId} onReady={this.onReady} />
            </div>
        )
    }
}
