import React from 'react';
import GamePoster from './components/game-poster';

import { 
    Paragraph, 
    AddToCartContainer, 
    AddToCartButton, 
    ProductsContainer, 
    ProductsSection
} from './styles/home';

export default function Fetch(props) {
    return (
        <div>
            <ProductsContainer>
                <ProductsSection>
                    {
                        props.products.map((game, key) => (
                            <div key={key}>
                                <GamePoster 
                                    posterImg={game.image}
                                    gameTitle={game.name}
                                />
                                <Paragraph data-testid="product-name">{game.name}</Paragraph>
                                <Paragraph data-testid="product-price"> R$: {game.price}</Paragraph>
                                <AddToCartContainer>
                                    <AddToCartButton onClick={() => props.addToCart(game)} data-testid="add-product"> Add to Cart </AddToCartButton>
                                </AddToCartContainer>
                            </div>
                        ))
                    }
                </ProductsSection>
            </ProductsContainer>
        </div>
    )
}