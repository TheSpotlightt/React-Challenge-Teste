import { fireEvent, getByText, render, screen, within } from '@testing-library/react';
import Home from '../components/home';
import Fetch from '../fetch';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const cartItems = [{
    count: 1,
    id: 99,
    image: "call-of-duty-wwii.png",
    name: "Call Of Duty WWII",
    price: 249.99,
    score: 205,
}];

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
}

test('should fetch items add item to cart', () => {
    const renderHome = render(<Router>
        <Fetch products={cartItems} addToCart={addToCart} />
    </Router>);

    const getTestId = renderHome.getByTestId('add-product');
    fireEvent.click(getTestId)
});


test('should render products on screen', () => {
    const { getByTestId} = render(<Router>
        <Fetch products={cartItems} addToCart={addToCart} />
    </Router>);

    const productName = within(getByTestId('product-name'))
    const productPrice = within(getByTestId('product-price'))

    expect(productName.getByText('Call Of Duty WWII')).toBeInTheDocument();
    expect(productPrice.getByText('R$: 249.99')).toBeInTheDocument();
})
