import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { removeFromDb } from '../../utilities/localDB';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const products = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveItemButton = (item) => {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
        setCart(newCart);
        removeFromDb(item.id);
    }

    const handleClearCart =() => {
        deleteShoppingCart();
        setCart([]);
    }
    return (
        <div className='shop-container'>
            {cart.length === 0 ? 
                <div className='w-full text-center mt-3'>
                    <h4>No orders have been placed.</h4>
                </div> 
                :
                <>
                <div className='p-8'>
                    {
                        cart.map(item => <ReviewItem key={item.id} 
                        item={item}
                        handleRemoveItemButton={handleRemoveItemButton}
                        />)
                    }
                </div>
                <div className="cart-container h-screen">
                    <Cart cart={cart}>
                        <button className='cart-btn bg-red-500 mb-2' onClick={handleClearCart}>Clear Cart</button>
                        <Link to='/shipping'>
                            <button className='cart-btn bg-yellow-500'>
                                Proceed Shipping 
                            </button>
                        </Link>
                    </Cart>
                </div>
                </>
            }
        </div>
    );
};

export default Orders;