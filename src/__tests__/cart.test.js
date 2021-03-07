import { fireEvent, getByText, render, screen, within } from '@testing-library/react';
import Cart from '../components/cart'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';



test('Should Render items counter', () => {
    const { getByTestId } = render(<Router>
        <Cart counter="8" cartItems={[{
        count: 1,
        id: 99,
        image: "call-of-duty-wwii.png",
        name: "Call Of Duty WWII",
        price: 249.99,
        score: 205,
    }]} />
    </Router>);
    const { getByText } = within(getByTestId('counter-test'))
    expect(getByText('8')).toBeInTheDocument();
});

test('Should Open cart', () => {
    const renderCart = render(<Router>
        <Cart counter="8" cartItems={[{
        count: 1,
        id: 99,
        image: "call-of-duty-wwii.png",
        name: "Call Of Duty WWII",
        price: 249.99,
        score: 205,
    }]} />
    </Router>);

    const getTestId = renderCart.getByTestId('click-test')
    fireEvent.click(renderCart.getByText(/You have 8 items in the cart/i))
    expect(getTestId).toBeInTheDocument();
});

test('should render items in the cart', () => {
    const { getByTestId } = render(<Router>
        <Cart counter="8" cartItems={[{
        count: 1,
        id: 99,
        image: "call-of-duty-wwii.png",
        name: "Call Of Duty WWII",
        price: 249.99,
        score: 205,
    }]} />
    </Router>);
    const productName = within(getByTestId('product-name'))
    const productPrice = within(getByTestId('product-price'))

    expect(productName.getByText('Call Of Duty WWII')).toBeInTheDocument();
    expect(productPrice.getByText('R$ 249.99 x 1')).toBeInTheDocument();
});

test('should remove item from cart', () => {
    const cartItems = [{
    count: 1,
    id: 99,
    image: "call-of-duty-wwii.png",
    name: "Call Of Duty WWII",
    price: 249.99,
    score: 205,
    }]

    const removeFromCart = (product) => {
        const cartItem = cartItems.slice();
        cartItem.filter(x => x.id !== product.id);
    }

    const renderCart = render(<Router>
        <Cart  cartItems={cartItems} counter="8" removeFromCart={removeFromCart} />
    </Router>);
    
    const getTestId = renderCart.getByTestId('remove-product');
    fireEvent.click(getTestId);
});

