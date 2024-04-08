
import React from 'react';
import FeaturedProductsSlider from './FeaturedProductsSlider';
import NewForYou from './Newforyou';
import ContactUs from './Contactus';
import Customermsg from "../Home/Customermsg"
import Landingpage from './Landingpage';
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Landingpage/>

      {/* Featured Products Section */}
       <FeaturedProductsSlider/>

       {/* //New for you section */}
      <NewForYou/>


     {/* //contact us section */}
      <ContactUs/>  

     

      {/* Testimonials Section */}
      <Customermsg/>
      </div>
  );
};

export default Home;

