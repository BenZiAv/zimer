import React from 'react';
import MyImages from './MyImages';

const ZimmerCard = ({ name, description, image, price }) => {
  return (
    <div className="zimmer-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
};

const ZimmerPage = () => {
  const zimmers = [
    {
      name: 'Zimmer 1',
      description: 'צימר יפה בצפון רמת הגולן',
      image: 'https://th.bing.com/th/id/OIP.ev7ul2J_PkeFS3-wCOtdAQHaEc?pid=ImgDet&rs=1',
      price: '$100'
    },
    {
      name: 'Zimmer 2',
      description: 'This is the description of Zimmer 2.',
      image: 'zimmer2.jpg',
      price: '$150'
    },
    {
      name: 'Zimmer 3',
      description: 'This is the description of zimmer3',
      image: '',
      price: '$150'
    }
  ];

  return (
    <div className="zimmer-page">
      <h1>Zimmer Listings</h1>
      {zimmers.map((zimmer, index) => (
        <ZimmerCard
          key={index}
          name={zimmer.name}
          description={zimmer.description}
          image={zimmer.image}
          price={zimmer.price}
        />
      ))}
    </div>
  );
};

export default ZimmerPage;
