import React from 'react';

const ActorCard = ({ results }) => {
    const actorPicture = `https://image.tmdb.org/t/p/w200/${results.profile_path}`
    return (
        <div className="card actor-card">
            <img className="card-img-top" src={actorPicture} alt={results.name} />
            <div className="card-body">
                <p className="card-text actor-name">{results.name}</p>
                <p className="card-text font-italic">{results.character}</p>
            </div>
        </div>
    )
}

export default ActorCard;