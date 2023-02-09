//Add to local storage function
const addToDb = productID => {

    //getting cart from local storage
    let shoppingCart;
    let storedCart = localStorage.getItem('shopping-cart');

    if(storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    // adding quantity to the product ID
    let quantity = shoppingCart[productID];

    if(quantity) {
        shoppingCart[productID] = quantity + 1;
    }
    else {
        shoppingCart[productID] = 1;
    }

    //storing shopping cart to local storage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// Function for getting shopping cart(object) form local storage
const getStoredCart = () => {
    // let shoppingCart = {};

    let storedCart = localStorage.getItem('shopping-cart');
    if(storedCart) {
       let shoppingCart = JSON.parse(storedCart);
       return shoppingCart;
    }
}





const removeFromDb = productID => {
    let storedCart = localStorage.getItem('shopping-cart');
    let shoppingCart = JSON.parse(storedCart);

    if (shoppingCart.hasOwnProperty(productID)) {
        delete shoppingCart[productID];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

export { 
    addToDb, 
    getStoredCart,
    removeFromDb
};