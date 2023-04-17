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
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

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
      element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'signup',
      element: <SignUp></SignUp>
    },
    {
      path:'checkout',
      element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

