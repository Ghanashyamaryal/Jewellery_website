import React from 'react';
import { Link } from "react-router-dom";
import {  useSelector } from 'react-redux';

const Navbar = () => {
    const Cart= useSelector((state)=>state.cart)
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <span>SFG</span>
            <div>
               <Link to="/" className='navLink'>Home</Link>
               <Link to="/Cart" className='navLink'>Cart</Link>
               <span className='navLink'>Cart Item:{Cart.length} </span>
               
            </div>
           
        </div>
    );
}

export default Navbar;
