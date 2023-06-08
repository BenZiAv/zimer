import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Content from './Content';
import Footer from './Footer';
import Image from './../src/images/zimer1.jpg';
import './HomePage.css';



const HomePage = () => {
  return (
    <div>
      <img src="./../src/images/zimer1.jpg" alt=""></img>
      <Header className="header" />
      {/* <Banner className="banner" />
      <Content className="content" />
      <Footer className="footer" /> */}
    </div>
  );
};

export default HomePage;