import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import { addToDb,getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import useProducts from '../../Hooks/useProducts';

const Shop = () => {
   const [products , setProducts] =useProducts()
    const [cart,setcart] =useState([]);
   

    useEffect(()=>{
        const storedCart =getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product=>product.id ===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity =quantity;
               savedCart.push(addedProduct) ;
            }
        }
        setcart(savedCart)
    },[products])
    const handlerAddToCart =(selectedProduct)=>{
        let newCart =[];
      const exists = cart.find(product=>product.id === selectedProduct.id);
      if(!exists){
          selectedProduct.quantity = 1;
          newCart = [...cart,selectedProduct];
      }
      else{
          const rest = cart.filter(product => product.id !== selectedProduct.id);
          exists.quantity = exists.quantity + 1;
          newCart = [...rest,exists]
      }
       
        setcart(newCart);
        addToDb(selectedProduct.id);
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
             <Cart cart={cart}></Cart>
            </div>  
        </div>
    );
};

export default Shop;