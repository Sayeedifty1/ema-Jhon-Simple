import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    //  if cart data is in database, you should use async await
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
    console.log(ids);
    

    const loadedProducts= await fetch('http://localhost:5000/productsByIds',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
    });
    const products = await loadedProducts.json();
    console.log(products);

    
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