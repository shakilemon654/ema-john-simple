import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState(fakeData.slice(0, 5));
     
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>This is cart</h2>
            </div>
        </div>
    );
};

export default Shop;