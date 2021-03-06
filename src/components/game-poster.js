import React from 'react';

import { Container, Poster } from '../styles/poster';

export default function GamePoster(props) {
    const posterImg = props.posterImg;
    const gameTitle = props.gameTitle;

    return (
        <Container>
            <Poster src={`/assets/${posterImg}`} alt={gameTitle}  />
        </Container>
    )
}