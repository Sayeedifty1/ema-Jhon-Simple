import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard} from '@fortawesome/free-solid-svg-icons';


const Order = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart]= useState(SavedCart);

    const handleRemoveFromCart = (id)=>{
        const remaining = cart.filter(product => product.id!== id)
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product =><ReviewItem key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
                
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart } 
                >
                    <Link className='proceed-link'  to="/checkout"> <button className='btn-checkout'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard}/> </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;