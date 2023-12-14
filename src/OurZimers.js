import React from 'react';

const OurZimers = ({ activePage }) => {
  // Sample B&B units data (replace with your actual data)
  const bnbUnits = [
    { 
      id: 1, 
      name: 'Family Unit #1',  
      image: 'https://www.afristay.com/media/thumbnails/pictures/places/257/91190.jpg.1366x768_q85_crop_upscale.jpg', 
      description: 'Family unit included 2 bedrooms, one living room, full kitchen, jacuzzi, swimming pool, and two shower rooms.' 
    },
    { 
      id: 2, 
      name: 'Family Unit #2', 
      image: 'https://media.istockphoto.com/id/1148629418/photo/home-or-house-building-exterior-and-interior-design-showing-tropical-pool-villa-with-green.jpg?s=612x612&w=0&k=20&c=LwIGTtfR5Ce1g0K5Oau0OtA75u5LCSotGF-PQbNS17E=', 
      description: 'Family unit included 2 bedrooms, one living room, full kitchen, jacuzzi, swimming pool, and two shower rooms.' 
    },
    { 
      id: 3, 
      name: 'B&B Unit 3', 
      image: 'https://media.istockphoto.com/id/509553708/photo/tropical-modern-villa-exterior.jpg?s=612x612&w=0&k=20&c=rMmOmihiXHl6htuhYVzbfPdKAawYHFuNMhD32A0sWUg=', 
      description: 'Family unit included 2 bedrooms, one living room, full kitchen, jacuzzi, swimming pool, and two shower rooms.' 
    },
    { 
      id: 4, 
      name: 'B&B Unit 4', 
      image: 'https://media.istockphoto.com/id/1281220530/photo/woman-tourist-relaxing-near-luxury-swimming-pool-in-hotel.jpg?s=1024x1024&w=is&k=20&c=OC0KixHV9We8w5BIV9wehvXhfXezJ8Z7dfbj-BS9mHI=', 
      description: 'Family unit included 2 bedrooms, one living room, full kitchen, jacuzzi, swimming pool, and two shower rooms.' 
    },
    // Add more units as needed
  ];

  return (
    <div>
      <h1 className='h1_our_zimers'>OurZimers</h1>

      {bnbUnits.length >= 4 ? (
        <div>
          <h2>Available B&B Units:</h2>
          <div className='units_grid'>
            {bnbUnits.slice(0, 4).map((unit) => (
              <div key={unit.id} className='unit_item'>
                <strong>{unit.name}</strong>
                {unit.image && <img src={unit.image} alt={unit.name} />}
                <p>{unit.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No B&B units available.</p>
      )}
    </div>
  );
};

export default OurZimers;
