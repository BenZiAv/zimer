import React from 'react';
import Header from './Header';
 import Footer from './Footer';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className='body1'>
      
      
      <Header className="header" />
      
      { <Footer className="footer" />  }
    </div>
  );
};

export default HomePage;