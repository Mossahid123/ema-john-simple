import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name} =props.product;
    return (
        <div className='review-item'>
            <h3>Review Iteam:{name}</h3>
        </div>
    );
};

export default ReviewItem;