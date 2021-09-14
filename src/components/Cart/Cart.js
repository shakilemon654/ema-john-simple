import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = cart.reduce((totalPrice, product) => totalPrice + product.price, 0);
    let shippingCost = (totalPrice) => {
        let cost;
        if (totalPrice === 0) {
            cost = 0;
        } else if (totalPrice > 100) {
            cost = 0;
        } else if (totalPrice > 50) {
            cost = 10;
        } else {
            cost = 20;
        }
        return cost;
    };

    const decimalPointFixed = num => Number(num.toFixed(2));
    let taxVat = totalPrice / 10;
    let cartSummary = totalPrice + shippingCost(totalPrice) + taxVat;

    return (
        <div>
            <h2>Order summary</h2>
            <p>Items ordered: {cart.length}</p>
            <p>Total price: {decimalPointFixed(totalPrice)}</p>
            <p>Shipping cost: {shippingCost(totalPrice)}</p>
            <p>Tax + VAT: {decimalPointFixed(taxVat)}</p>
            <p>Cart summary: {decimalPointFixed(cartSummary)}</p>
            
        </div>
    );
};

export default Cart;