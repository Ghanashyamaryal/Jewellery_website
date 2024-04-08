import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './component/Home/Home';
import Cart from "./component/Products/Cart"
import { Provider } from 'react-redux';
import {store} from './store/store';
import Product from "./component/Products/Product"
import LoginPage from "./component/Login"
import SignUp from "./component/Signup"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='/' element= {<Home/>}/>
      <Route path='/login' element= {<LoginPage/>}/>
      <Route path='/signup' element= {<SignUp/>}/>
      <Route path='/product' element= {<Product/>}/>
      <Route path='/Cart' element = {<Cart/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.querySelector("#root"))
.render(
  <Provider store  = {store}>
     <RouterProvider router={router}/>
  </Provider>
 
)