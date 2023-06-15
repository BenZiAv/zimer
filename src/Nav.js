import React, { useState } from 'react';
import About from './About';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const handlePageClick = (page) => {
    // eslint-disable-next-line no-undef
    setActivePage(page);
    setIsNavOpen(false);
  };

  return (
    <span>
      <button className='menu_btn' onClick={handleNavToggle}>Menu</button>
      {isNavOpen && (
        <nav className='nav'>
          <ul className='ul'>
            <button className='btn_ul' onClick={handlePageClick}>Home</button>
            <button className='btn_ul' onClick={handlePageClick}>About</button>
            <button className='btn_ul' onClick={handlePageClick}>Gallery</button>
            <button className='btn_ul' onClick={handlePageClick}>Contact</button>
            <button className='btn_ul' onClick={handlePageClick}>Rate Us</button>
          </ul>
        </nav>
      )}
    </span>
    
  );
};

export default Nav;