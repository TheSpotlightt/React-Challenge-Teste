import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    RemoveFromCartButton
} from '../styles/cart';

export default function Checkout(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const cartItems = props.cartItems;
    console.log(cartItems)

    const itemsCounter = props.counter;

    const subtotal = cartItems.reduce((accumulator, record) => accumulator + (record.price * record.count), 0)
    const frete = cartItems.reduce((accumulator, record) => accumulator + (record.count * 10 ), 0);
    const total = cartItems.reduce((accumulator, record) => accumulator + ( record.price * record.count + 10), 0);

    return cartItems === undefined ? <h1> Loading... </h1> : (
        <div>
            <Header>
                <Span> {itemsCounter} </Span>
                <Link to="#">
                    <CartImg src={'/assets/cart-icon.svg'} alt="Cart Icon" onClick={showSidebar} />
                </Link>
            </Header>

            <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
                <div className='nav-menu-items'>
                    <div className='navbar-toggle' onClick={showSidebar} >
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
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
                                <List>
                                    <Paragraph> {product.name} </Paragraph>
                                    <GamePoster
                                        posterImg={product.image}
                                        gameTitle={product.name}
                                    />
                                    <Paragraph> R$ {product.price} x {product.count} </Paragraph>
                                    <RemoveFromCartContainer>
                                        <RemoveFromCartButton onClick={() => props.removeFromCart(product)}> Remove </RemoveFromCartButton>
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