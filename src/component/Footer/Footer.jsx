import React from 'react';
import {useNavigate} from "react-router-dom"
const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20 mb-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">SFG Jewellery and Gems</h3>
          <p className="text-sm">Kwabhal Thahity</p>
          <p className="text-sm">Kathmandu, Nepal</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-300 hover:text-gray-200"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-300 hover:text-gray-200"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="text-sm">
            <li><a onClick={()=>navigate("/")} className="text-gray-300 hover:text-gray-200 cursor-pointer">About Us</a></li>
            <li><a onClick={()=>navigate("/product")} className="text-gray-300 hover:text-gray-200 cursor-pointer">Products</a></li>
            <li><a onClick={()=>navigate("/contact")} className="text-gray-300 hover:text-gray-200 cursor-pointer">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="text-sm">
            <li><a href="#" className="text-gray-300 hover:text-gray-200">FAQs</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Shipping & Returns</a></li>
            <li><a href="#" className="text-gray-300 hover:text-gray-200">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-2">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SFG Jewellery and Gems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
