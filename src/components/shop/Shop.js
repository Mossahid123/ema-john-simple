import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setcart] =useState([]);
   
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const handlerAddToCart =(product)=>{
        console.log(product)
        const newCart = [...cart ,product];
        setcart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="shopping-container">
               {
                   products.map(product=><Products
                   key={product.id}
                   product={product}
                   handlerAddToCart={handlerAddToCart}
                   ></Products>)
               }
            </div>
            <div className="cart-container">
              <h1>Order Summary</h1>
              <p>Selected Items : {cart.length}</p>
              <p>Total Price:{cart.price}</p>
            </div>  
        </div>
    );
};

export default Shop;