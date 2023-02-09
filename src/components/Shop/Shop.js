import './Shop.css';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/localDB';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';
import {} from '../../hooks/useProducts';

const Shop = () => {
    // const products = useProducts();
    const products = useLoaderData();
    const [cart, setCart] = useCart(products);  

    const handleAddToCart = (product) => {
        let productAlreadyExistsInCart = cart.find(productInCart => productInCart.id === product.id);

        if(productAlreadyExistsInCart) {
            cart.forEach((item, index) => {
                if(item.id === product.id) {
                    item.quantity = item.quantity + 1;
                    setCart([...cart]);
                }
            })
        }
        else {
            product.quantity = 1;
            let newCart = [...cart, product];
            setCart(newCart); 
        }
        addToDb(product.id);
    }

    const handleClearCart = () => {
        deleteShoppingCart();
        setCart([]);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='cart-btn bg-red-500 mb-2' onClick={handleClearCart}>Clear Cart</button>
                    <Link to='/orders'>
                        <button className='cart-btn bg-yellow-500'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;