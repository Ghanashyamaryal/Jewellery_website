// NewForYou.js
import React from 'react';

const NewForYou = () => {
  // Sample data for categories
  const categoryItems = [
    {
      imageUrl: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 1',
      Price: 'Description of Gift 1',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 2',
      Price: 'Description of Gift 2',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3634366/pexels-photo-3634366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 3',
      Price: 'Description of Gift 3',
    },
    // Add more categories as needed
  ];

  return (
    <div className="container m-12 p-4">
      <h2 className="font-bold mb-4 h-40 flex flex-wrap justify-center text-orange-700 text-5xl ">New For You</h2>
      <div className="flex flex-wrap justify-between">
        {categoryItems.map((category, index) => (
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
  );
};

export default NewForYou;
