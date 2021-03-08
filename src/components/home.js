import React, { useState, useEffect } from 'react';

import Cart from './cart'
import Filter from './filter';
import Fetch from '../fetch'

import { Header, Title } from '../styles/home';

export default function Home(props) {
    const [products, getProducts] = useState([]);
    const [cartItems, getCartItems] = useState([]);
    const [counter, setCounter] = useState(0);
    const [sort, setSort] = useState('');

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

    const sortByPrice = (event) => {
        const value = event.target.value;

        const productSorted = products.slice().sort((a, b) => (
            value === 'lowest' ? 
            ((a.price > b.price) ? 1:-1) :
            value === 'highest' ?
            ((a.price < b.price) ? 1:-1) :
            ((a.id < b.id) ? 1:-1)
        ))

        setSort(productSorted)
        getProducts(productSorted)
    }

    const sortByPopularity = (event) => {
        const value = event.target.value;

        const productSorted = products.slice().sort((a, b) => (
            value === 'lowest' ? 
            ((a.score > b.score) ? 1:-1) :
            value === 'highest' ?
            ((a.score < b.score) ? 1:-1) :
            ((a.id < b.id) ? 1:-1)
        ))

        setSort(productSorted)
        getProducts(productSorted)
    }

    const sortByAlphabeticOrder = (event) => {
        const value = event.target.value;

        const productSorted = products.slice().sort((a, b) => (
            value === 'alfabetica' ? 
            a.name.localeCompare(b.name) :
            a.id < b.id ? 1:-1
        ));

        setSort(productSorted)
        getProducts(productSorted)
    }

    return (
        <div>
            <Header>
                <Filter 
                    productsCount={products.length}
                    sortProducts={sort}
                    sortByPrice={sortByPrice}
                    sortByPopularity={sortByPopularity}
                    sortByAlphabeticOrder={sortByAlphabeticOrder}
                />
                <Title> Game Store </Title>
                <Cart 
                    removeFromCart={removeFromCart}
                    counter={counter}
                    cartItems={cartItems}
                />
            </Header>
            <Fetch 
                products={products}
                addToCart={addToCart}
            />
        </div>
    );
}