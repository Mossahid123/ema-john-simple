import React from 'react';
import'./Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = ({product,handlerAddToCart}) => {
    // const {product,handlerAddToCart}=props
   const {name,img,price,seller,ratings} =product;
//    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>Price : {price}</small></p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} star</small></p>
            </div>
            <button onClick={()=>handlerAddToCart(product)} className='add-cart'>
                <p>Add cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Products;