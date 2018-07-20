import React, { Component } from 'react';
import ActorNames from '../components/ActorNames';

export default class ActorList extends Component {
    render() {
        return (
            <div>
                <h6>Cast</h6>
                <div>
                    {
                        this.props.credits.slice(0, 5).map((credit, index) => {
                            return <ActorNames credit={credit} key={index} />
                        })
                    }
                </div>
            </div>
        )
    }
}
