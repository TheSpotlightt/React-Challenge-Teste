import React from 'react';

export default function GamePoster(props) {
    const posterImg = props.posterImg;
    const gameTitle = props.gameTitle;

    return (
        <img src={posterImg} alt={gameTitle}  />
    )
}