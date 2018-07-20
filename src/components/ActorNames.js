import React, { Component } from 'react';

export default class ActorBubble extends Component {
  render() {
      const { credit } = this.props;

      // let posterUrl = `https://image.tmdb.org/t/p/original${credit.profile_path}`;

    return (
      <div>
        <p>{credit.name}</p>
      </div>
    )
  }
}
