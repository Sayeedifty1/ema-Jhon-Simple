import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    const{name, quantity, id ,img} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItem;