import React from 'react';
import './Cart.css';

const Cart = ({cart, children}) => {
    
    let totalPrice = cart.reduce((totalPrice, product) => totalPrice + (product.price * product.quantity), 0);
    let totalQuantity = cart.reduce((totalQuantity, product) => totalQuantity + product.quantity, 0);
    let shipping = cart.reduce((totalShipping, product) => totalShipping + product.shipping, 0);
    let tax = totalPrice * 0.1;
    let grandTotal = totalPrice + shipping + tax;
    
    return (
        <div className='cart grid grid-cols-1 gap-8'>
            <h4 className='font-semibold text-2xl'>Order Summary</h4>
            <div className='grid grid-cols-1 gap-3'>
                <p>Selected Items: {totalQuantity} </p>
                <p>Total Price: ${totalPrice} </p>
                <p>Shipping: {shipping} </p>
                <p>Tax (10% of Total Price): {tax.toFixed(2)} </p>
                <h4 className='font-medium text-base'>Grand Total: {grandTotal} </h4>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Cart;