import React from 'react';
import'./Products.css'

const Products = (props) => {
   const {id,img,price,seller,ratings} =props.product
    return (
        <div className='product'>
            <img src={img} alt=''></img>
        </div>
    );
};

export default Products;