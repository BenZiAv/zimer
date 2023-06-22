import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './HomePage.css';
import injectComponent from './Nav';



const HomePage = () => {
  return (
    <div className='body1'>
      
      
      <Header className="header" />
      
      {/* <Footer className="footer" /> */ }
    </div>
  );
};

export default HomePage;