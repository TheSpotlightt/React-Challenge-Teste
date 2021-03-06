import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GamePoster from './game-poster';
import * as AiIcons from 'react-icons/ai';

import '../index.css'

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
            <div>
                <Link to="#">
                    <span> {itemsCounter} </span>
                    <img src={'/assets/cart-icon.svg'} alt="Cart Icon" onClick={showSidebar} />
                </Link>
            </div>
            <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
                <div className='nav-menu-items'>
                    <div className='navbar-toggle' onClick={showSidebar} >
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </div>

                    <h1> Checkout </h1>

                    {
                        cartItems.length === 0 ? (
                            <div> Cart is empty </div>
                        ) : (
                            <div> You have {itemsCounter} items in the cart </div>
                        )
                    }

                    {
                        cartItems.map((product, key) => (
                            <ul key={key}>
                                <li>
                                    <p> {product.name} </p>
                                    <GamePoster
                                        posterImg={product.image}
                                        gameTitle={product.name}
                                    />
                                    <p> R$ {product.price} x {product.count} </p>
                                    <button onClick={() => props.removeFromCart(product)}> Remove </button>
                                </li>
                            </ul>
                        ))
                    }

                    {
                        cartItems.length !== 0 && (
                            <div>
                                <div>
                                    <p>
                                        Subtotal: 
                                        R$ {
                                            subtotal
                                        }
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        {
                                            subtotal >= 250 ? 'Frete Grátis' : ` Frete: R$ ${frete}`
                                        }
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Total:
                                        R$ {
                                            subtotal >= 250 ? subtotal : total
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}