import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product =><ReviewItem key={product.id}
                    product={product}
                    ></ReviewItem>)
                }
                
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;