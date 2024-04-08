
import React from 'react';
// import { ChevronRightIcon } from '@heroicons/react/outline'; // Importing the ChevronRightIcon from Heroicons

const FeaturedProductsSlider = () => {
  // Sample data for gift items
  const giftItems = [
    {
      imageUrl: 'https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Gift 1',
      Price: 'Description of Gift 1',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 2',
      Price: 'Description of Gift 2',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 3',
      Price: 'Description of Gift 3',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 3',
      Price: 'Description of Gift 3',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 3',
      Price: 'Description of Gift 3',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 3',
      Price: 'Description of Gift 3',
    },
  ];

    return (
      <>
      <h2 className="font-bold m-12  flex flex-wrap justify-center text-orange-700 text-5xl">Gift Section</h2>
      <div className="container mx-auto p-4">
        
        <div className="flex flex-wrap justify-between">
          {giftItems.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 mb-4" style={{ width: 'calc(33.33% - 16px)', height: '400px' }}>
              <div className="relative" style={{ width: '100%', height: '100%' }}>
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="rounded-lg w-full h-full object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h3 className="text-white text-xl font-semibold mb-2">{category.title}</h3>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button className="flex items-center text-blue-500 hover:text-blue-700">
            Next
          </button>
        </div>
      </div>
      </>
      
  );
};

export default FeaturedProductsSlider;
