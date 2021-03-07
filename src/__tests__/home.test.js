import { fireEvent, getByText, render, screen, within } from '@testing-library/react';
import Home from '../components/home'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

test('should add item to cart', () => {
    const renderHome = render(<Router>
        <Home />
    </Router>);


    const getTestId = renderHome.getByTestId('add-product');
    fireEvent.click(getTestId)
})
