import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loadedProducts= await fetch('http://localhost:5000/products')
    const products = await loadedProducts.json();

    //  if cart data is in database, you should use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart){
        const addedProduct = products.find(pd =>pd._id===id);
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)

    }

    // If you have to return two things return as array and destructure it [product , savedCart]
    // another option is send it as array {products ,  cart: savedCart}
   
    return savedCart;
}
 export default cartProductsLoader;