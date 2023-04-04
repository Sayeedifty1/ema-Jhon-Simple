import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({product}) => {
    const{name, price, quantity, id ,img} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-name'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
                

            </div>
            <button className='btn-delete'><FontAwesomeIcon icon={faTrashAlt}/></button>
        </div>
    );
};

export default ReviewItem;