import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/localDB";

const useCart = (products) => { 
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const storedCart = getStoredCart();
        let storedProducts = [];

        for(let productID in storedCart) {
            const storedProduct = products.find(product => product.id === productID);
    
            if (storedProduct) {
                storedProduct.quantity = storedCart[productID];
                storedProducts.push(storedProduct);
            }
        }
        setCart(storedProducts);
    }, [products])
    
    return [cart, setCart];
}
export default useCart;