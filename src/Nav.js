import React, { useState } from 'react';
import About from './About';

const Nav = ({setActivePage}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const handlePageClick = () => {
    setIsNavOpen(false);
    let injectComponent = (component) => {
      return <div className="" >
        <About/>
      </div> 
    };
  };

  return (
    <span>
      <button className='menu_btn' onClick={handleNavToggle}>Menu</button>
      {isNavOpen && (
        <nav className='nav'>
          <button className='btn_ul' onClick={handlePageClick}>Home</button>
          <button className='btn_ul' onClick={handlePageClick}>About</button>
          <button className='btn_ul' onClick={handlePageClick}>Gallery</button>
          <button className='btn_ul' onClick={handlePageClick}>Contact</button>
          <button className='btn_ul' onClick={handlePageClick}>Rate Us</button>
        </nav>
      )}
    </span>
    
  );
};

export default Nav;