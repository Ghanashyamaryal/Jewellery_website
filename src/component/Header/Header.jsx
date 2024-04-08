import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import LogoutBtn from './LogoutBtn';


function Header() {
  const Cart= useSelector((state)=>state.cart)
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Products',
      slug: '/product',
      active: !authStatus,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
  ];

  return (
    <header className="bg-gray-800 text-white py-4 rounded-md mt-0 ">
   
        <div className="flex items-center justify-between">
          <div className="ml-7 ">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <div className="flex items-center justify-between">
          <div className="ml-7 ">
            <input 
            type='text'
            placeholder='Search jewellery'
            className=' rounded-lg text-black p-1'
            />
          </div>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
              <button className='className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full' 
              onClick={(e)=>navigate("/Cart")}
              >Cart Item:{Cart.length} </button>
            </ul>
            
          </nav>
        </div>
      
    </header>
  );
}

export default Header;
