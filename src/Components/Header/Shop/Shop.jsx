import React, { useEffect, useState } from 'react'
import { addToDb, getShoppingCart } from '../../../utilities/fakedb'
import Cart from '../../Cart/Cart'
import Product from '../../Product/Product'
import './Shop.css'


const Shop = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    const storedCard = getShoppingCart();
    const savedCart = [];
    // step 1
    for (const id in storedCard) {

      // console.log(id)
      // step 2: get the product by using id
      const addedProduct = products.find(product => product.id === id)
      if (addedProduct) {
        // console.log(addedProduct);
        // step 3: get quantity of the carts
        const quantity = storedCard[id]
        addedProduct.quantity = quantity;

        savedCart.push(addedProduct);
      }
      

    }
    // step 5: set cart
    setCart(savedCart);
  }, [products])

  const handleAddToCart = (product) => {
    let newCart = [];
    // if product doesn't exist in the cart, set quantity = 1, 
    // if exist  update by 1
    const exists = cart.find(pd => pd.id == product.id);
    if(!exists){
      product.quantity=1;
      newCart = [...cart ,product ]
    }
    else{
      exists.quantity = exists.quantity +1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining , exists];
    }
    setCart(newCart);
    addToDb(product.id)


  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }

      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>

    </div>
  )
}


export default Shop


