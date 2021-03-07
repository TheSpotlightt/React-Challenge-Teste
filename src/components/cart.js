import React, { useState } from 'react';
import GamePoster from './game-poster';
import * as AiIcons from 'react-icons/ai';

import '../styles/cart.css'

import {
    Header, 
    CartImg, 
    Span, 
    Title,
    Paragraph,
    Ul,
    List,
    ParagraphBuyInfos,
    RemoveFromCartContainer,
    RemoveFromCartButton,
    Container
} from '../styles/cart';

export default function Checkout(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const cartItems = props.cartItems;

    const itemsCounter = props.counter;
    console.log(cartItems)

    const subtotal = cartItems.reduce((accumulator, record) => accumulator + (record.price * record.count), 0)
    const frete = cartItems.reduce((accumulator, record) => accumulator + (record.count * 10 ), 0);
    const total = cartItems.reduce((accumulator, record) => accumulator + ( record.price * record.count + 10), 0);

    return cartItems === undefined ? <h1> Loading... </h1> : (
        <div>
            <Header>
                <Container>
                    <Span data-testid="counter-test"> {itemsCounter} </Span>
                    <CartImg src={'/assets/cart-icon.svg'} alt="Cart Icon" onClick={showSidebar} data-testid="click-test" />
                </Container>
            </Header>

            <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
                <div className='nav-menu-items'>
                    <div className='navbar-toggle' onClick={showSidebar}>
                        <div className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </div>
                    </div>

                    <Title> Checkout </Title>

                    {
                        cartItems.length === 0 ? (
                            <Paragraph> Cart is empty </Paragraph>
                        ) : (
                            <Paragraph> You have {itemsCounter} items in the cart </Paragraph>
                        )
                    }

                    {
                        cartItems.map((product, key) => (
                            <Ul key={key}>
                                <List data-testid="list-test">
                                    <Paragraph data-testid="product-name"> {product.name} </Paragraph>
                                    <GamePoster
                                        posterImg={product.image}
                                        gameTitle={product.name}
                                    />
                                    <Paragraph data-testid="product-price"> R$ {product.price} x {product.count} </Paragraph>
                                    <RemoveFromCartContainer>
                                        <RemoveFromCartButton onClick={() => props.removeFromCart(product)} data-testid="remove-product" > Remove </RemoveFromCartButton>
                                    </RemoveFromCartContainer>
                                </List>
                            </Ul>
                        ))
                    }

                    {
                        cartItems.length !== 0 && (
                            <div>
                                <div>
                                    <ParagraphBuyInfos>
                                        Subtotal: 
                                        R$ {
                                            subtotal
                                        }
                                    </ParagraphBuyInfos>
                                </div>

                                <div>
                                    <ParagraphBuyInfos>
                                        {
                                            subtotal >= 250 ? 'Frete Grátis' : ` Frete: R$ ${frete}`
                                        }
                                    </ParagraphBuyInfos>
                                </div>

                                <div>
                                    <ParagraphBuyInfos>
                                        Total:
                                        R$ {
                                            subtotal >= 250 ? subtotal : total
                                        }
                                    </ParagraphBuyInfos>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}