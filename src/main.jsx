import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Header/Shop/Shop';
import Home from './Components/Layout/Home';
import Order from './Components/Orders/Order';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductsLoader from './Loaders/CartProductsLoader';
import Checkout from './Components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children:
   [ {
      path:'/',
      element:<Shop></Shop>
    },
    {
      path: 'orders',
      element: <Order></Order>,
      loader: cartProductsLoader
    },
    {
      path:'Manage Inventory',
      element:<Inventory></Inventory>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'checkout',
      element:<Checkout></Checkout>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

