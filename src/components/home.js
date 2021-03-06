import React, { useState, useEffect } from 'react';

import GamePoster from './game-poster';
import Cart from './cart'


export default function Home() {
    const [products, getProducts] = useState([]);
    const [cartItems, getCartItems] = useState([]);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(response => getProducts(response))
    }, []);

    const addToCart = (product) => {
        const cartItem = cartItems.slice();
        let alreadyInCart = false;
        
        cartItem.forEach(item => {
            if (item.id === product.id) {
                item.count++;
                alreadyInCart = true;
            }
        });

        if (!alreadyInCart) {
            cartItems.push({ ...product, count: 1 });
        }
        getCartItems(cartItems);

        setCounter(cartItems.length);
    }
    
    const removeFromCart = (product) => {
        const cartItem = cartItems.slice();
        getCartItems(cartItem.filter(x => x.id !== product.id));
        setCounter(cartItems.length - 1);
    }

    return (
            <div>
                <Cart 
                    removeFromCart={removeFromCart}
                    counter={counter}
                    cartItems={cartItems}
                />

                {
                    products.map((game, key) => (
                        <div key={key}>
                        <GamePoster 
                            posterImg={game.image}
                            gameTitle={game.name}
                        />
                        {game.name}
                            <button onClick={() => addToCart(game)} > Add to Cart </button>
                        </div>
                    ))
                }
            </div>
    );
}