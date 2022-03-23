import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="shopping-container">
               {
                   products.map(product=><Products
                   key={product.id}
                   product={product}
                   ></Products>)
               }
            </div>
            <div className="cart-container">
              <h1>Order Summary</h1>
            </div>  
        </div>
    );
};

export default Shop;