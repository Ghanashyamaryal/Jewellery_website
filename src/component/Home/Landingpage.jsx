// HomePage.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useNavigate} from "react-router-dom"
const Landingpage = () => {
  const navigate = useNavigate()
  const slides = [
    {
      imageUrl: 'https://e0.pxfuel.com/wallpapers/314/887/desktop-wallpaper-mood-jewellery-model.jpg',
      alt: 'Slide 1',
    },
    {
      imageUrl: 'https://w0.peakpx.com/wallpaper/869/332/HD-wallpaper-models-model-bracelet-brunette-earrings-girl-indian-jewelry-necklace.jpg',
      alt: 'Slide 2',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1026814934/photo/portrait-of-beautiful-girl-dressed-in-a-traditional-indian-national-suit-jewelry-set-blouse.jpg?s=612x612&w=0&k=20&c=uufOkDl_fjDbLcVW8hWOgX-1zbE0D-2OfeTr9qukaT0=',
      alt: 'Slide 3',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time between slides in milliseconds
    pauseOnHover: true,
  };

  return (
    <div className="homepage h-1/2 mt-0 pt-0">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full">
            <img src={slide.imageUrl} alt={slide.alt} style={{ height: '600px', width: '100%', objectFit: 'cover' }} />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Discover the Beauty of Jewelry</h1>
                <p className="text-lg mb-4">Explore our stunning collection and find your perfect piece.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow-md" onClick={()=>navigate("/product")}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Landingpage;
