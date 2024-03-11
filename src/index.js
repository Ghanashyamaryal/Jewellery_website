import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './component/Home';
import Cart from "./component/Cart"
import { Provider } from 'react-redux';
import {store} from './store/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='/' element= {<Home/>}/>
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