import React from 'react';
import './cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tex = parseFloat((total * .01).toFixed(2));
    const grandTotal = total + shipping + tex;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items : {quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:${tex}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
            <button>Clear Cart</button>
            <button>Review Order</button>
        </div>
    );
};

export default Cart;