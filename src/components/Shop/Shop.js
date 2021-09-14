import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState(fakeData.slice(0, 5));
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        // console.log(product);
        
        setCart(cart => [...cart, product]);
        console.log("cart", cart);
    }
     
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        product={product} 
                        handleAddToCart={handleAddToCart}
                    >   
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;