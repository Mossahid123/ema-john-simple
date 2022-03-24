import React from 'react';
import'./Products.css'

const Products = (props) => {
   const {name,img,price,seller,ratings} =props.product
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <p>{name}</p>
            <p><small>Price : {price}</small></p>
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Rating : {ratings} star</small></p>
            <button>Add cart</button>
        </div>
    );
};

export default Products;